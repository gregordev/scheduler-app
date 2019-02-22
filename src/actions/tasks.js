// ADD_TASK
import uuid from "uuid";

export const setImportant = (id, isImportant) => ({
   type: 'SET_IMPORTANT',
   id,
   isImportant
});

export const addTask = (
    {
        title = "",
        date = undefined,
        hour = undefined,
        time = undefined,
        isImportant = 0,
        isCompleted = 0
    } = {}) => ({
    type: 'ADD_TASK',
    task: {
        id: uuid(),
        title,
        date,
        hour,
        time,
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