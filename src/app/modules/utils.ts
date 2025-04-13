export function formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
        month: 'short'
    });
    const month = formatter.format(date).toUpperCase();
    return `${month} ${date.getFullYear()}`;
}