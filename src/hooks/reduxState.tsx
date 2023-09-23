
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { teamData } from "../types/interface";


const initialState = {
    currentUser: {} as teamData | null,
};

const ReduxState = createSlice({
    name: "hackathon",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any> ) => 
        {
            state.currentUser = action.payload
        },
    },
});

export const { setUser  } = ReduxState.actions;

export default ReduxState.reducer;

