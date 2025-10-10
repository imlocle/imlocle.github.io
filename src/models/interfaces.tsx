export interface Project {
    id: number;
    title: string;
    description: string;
    outcomes?: string;
    technologies: string[];
    image?: string;
    link?: string;
    appStore?: string;
}