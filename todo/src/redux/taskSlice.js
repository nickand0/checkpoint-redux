import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.find((task) => task.id === id);
            if (task) {
                task.description = description;
            }
        },
        toggleTaskStatus: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
    },
});

export const { addTask, editTask, toggleTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
