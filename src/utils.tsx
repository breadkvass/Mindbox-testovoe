export const activeTasksPlurals = (number: number) => {
    const leftWords = ['осталась', 'осталось'];
    const tasksWords = [ 'задача', 'задачи', 'задач'];


    const pluralTasksWords = (number % 10 == 1 && number % 100 != 11 ? 0 : number % 10 >= 2 && number % 10 <=4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2);
    const pluralLeftWords = (number % 10 == 1 && number % 100 != 11 ? 0 : 1);

    const res = leftWords[pluralLeftWords] + ' ' + number + ' ' + tasksWords[pluralTasksWords];
    return res;
}