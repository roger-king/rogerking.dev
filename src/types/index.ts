export interface Work {
    company: string;
    title: string;
}

export interface GlobalContextType {
    selectedWork: Work;
    setSelectedWork(w: Work): void;
}
