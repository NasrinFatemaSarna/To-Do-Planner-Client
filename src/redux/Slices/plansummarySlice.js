


import {createSlice} from "@reduxjs/toolkit"

export const plansummarySlice = createSlice({

    name: "plansummary",
    initialState: {
        total: [],
    },
    reducers: {

        setTotal: (state, action) => {
            state.total = action.payload;
        },
    }

    
});
export const {setTotal} = plansummarySlice.actions;
export default plansummarySlice.reducer;



