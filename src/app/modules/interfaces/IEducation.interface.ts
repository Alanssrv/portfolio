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
    IN_PROGRESS = 'Em progresso',
    COMPLETED = 'Concluído',
    INTERRUPTED = 'Interrompido',
    DROPPED_OUT = 'Desistente',
    TRANSFERRED = 'Transferido'
}