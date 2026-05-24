export interface IFormation {
    title: string;
    certificate: boolean; // false is a course
    institution: string;
    description: string;
    technologies: string[];
    certificationUrl: string | null;
    completionDate: Date | null;
    courseUrl: string;
    imageUrl: string | null;
}
