export type Project = {
	id: number;
	title: string;
	description: string;
	links: LinkWidget[];
	tags: string[];
};

export type LinkWidget = {
	logo: string;
	link: string;
};

export type TechTag = {
	tag: string;
	link?: string;
};

export type CarouselImage = {
	alt: string;
	src: string;
	title: string;
};
