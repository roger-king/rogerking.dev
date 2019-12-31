export interface Work {
    company: string;
    title: string;
    website: string;
    location: string;
}

export interface GlobalContextType {
    selectedWork: Work;
    setSelectedWork(w: Work): void;
}
