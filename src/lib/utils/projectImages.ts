const IMAGES = import.meta.glob('/static/projects/**/**', {
	eager: true,
	query: '?url',
	import: 'default'
});

export function getProjectImages(slug: string) {
	return Object.entries(IMAGES)
		.filter(([path]) => path.includes(`/projects/${slug}/`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([_, url]) => ({
			src: url as string,
			alt: slug,
			title: ''
		}));
}
export function slugify(title: string) {
	return title
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}
