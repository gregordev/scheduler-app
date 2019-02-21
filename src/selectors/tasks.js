// Show tasks by filters

export default (tasks, {date, sortBy}) => {
    return tasks.filter((task) => {
        return task.date === date;
    }).sort((task1, task2) => {
        if (sortBy === 'importance') {
            return task2.isImportant - task1.isImportant || task1.hour - task2.hour;
        } else if (sortBy === 'hour') {
            return task1.hour > task2.hour ? 1 : -1;
        } else if (sortBy === 'name') {
            return (task1.title > task2.title ? 1 : -1);
        }
    })
};