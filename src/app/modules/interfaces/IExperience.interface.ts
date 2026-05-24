export interface IExperience {
    company: string;
    companyUrl: string;
    companyCategory: string;
    startDate: Date,
    endDate: Date | null,
    positions: {
        title: string;
        period: number | null; // in months
        description: string;
        technologies: string[];
    }[];
}