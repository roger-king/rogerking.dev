export interface Work {
    company: string;
    title: string;
    website: string;
    location: string;
}

export interface LanguageConfidence {
    language: string;
    value: number;
}

export interface Tech {
    img: string;
    category: 'Front End' | 'Back End' | 'DevOps';
    description: string;
}

export interface GlobalContextType {
    selectedWork: Work;
    setSelectedWork(w: Work): void;
}

export interface Reference {
    name: string;
    relation: string;
    testimonial: string;
}
