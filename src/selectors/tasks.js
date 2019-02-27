// Show tasks by filters

export default (tasks, {date, sortBy}) => {
    return tasks.filter((task) => {
        console.log(date);
        return task.date === date;
    }).sort((task1, task2) => {
        if (sortBy === 'completion') {
            return task2.isCompleted - task1.isCompleted || task1.time - task2.time;
        } else if (sortBy === 'hour') {
            return task1.time > task2.time ? 1 : -1;
        } else if (sortBy === 'name') {
            return (task1.title.toLowerCase() > task2.title.toLowerCase() ? 1 : -1);
        }
    })
};