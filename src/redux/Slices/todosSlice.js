

import {createSlice} from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: "todos",
    
    initialState: {
        New: [],
        Canceled: [],
        Completed: [],
        Progress: [],
    },
    reducers: {
        setNew: (state, action) => {
            state.New = action.payload;
        },
        setCanceled: (state, action) => {
            state.Canceled = action.payload;
        },
        setCompleted: (state, action) => {
            state.Completed = action.payload;
        },
        setProgress: (state, action) => {
            state.Progress = action.payload;
        },
    },
});
export const {setNew, setCanceled, setCompleted, setProgress} = todosSlice.actions;
export default todosSlice.reducer