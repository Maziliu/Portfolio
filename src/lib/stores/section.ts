import type { Section } from '$lib/types/navigation';
import { writable } from 'svelte/store';

export const activeSection = writable<Section>('projects');
