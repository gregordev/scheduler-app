// Show tasks by filters

export default (tasks, {date, sortBy}) => {
    return tasks.filter((task) => {
        return task.date === date;
    }).sort((task1, task2) => {
        if (sortBy === 'importance') {
            return task2.isImportant - task1.isImportant || task1.time - task2.time;
        } else if (sortBy === 'hour') {
            return task1.time > task2.time ? 1 : -1;
        } else if (sortBy === 'name') {
            return (task1.title.toLowerCase() > task2.title.toLowerCase() ? 1 : -1);
        }
    })
};