export interface IEducation {
    institution: string,
    course: string,
    startDate: Date,
    endDate: Date | null,
    state: EducationState
    projects: {
        title: string,
        description: string,
        technologies: string[]
    }[],
}

export enum EducationState {
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    INTERRUPTED = 'interrupted',
    DROPPED_OUT = 'dropped_out',
    TRANSFERRED = 'transferred'
}