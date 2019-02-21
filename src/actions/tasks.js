// ADD_TASK
import uuid from "uuid";

export const addTask = (
    {
        title = "",
        date = undefined,
        hour = undefined,
        isImportant = false,
        isCompleted = false
    } = {}) => ({
    type: 'ADD_TASK',
    task: {
        id: uuid(),
        title,
        date,
        hour,
        isImportant,
        isCompleted
    }
});
// EDIT_TASK
export const editTask = (id, updates) => ({
    type: 'EDIT_TASK',
    id,
    updates
});

// REMOVE_TASK
export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    id
});