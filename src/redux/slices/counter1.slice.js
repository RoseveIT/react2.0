import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0
}

const count1Slice = createSlice({
    name:'count1Slice',
    initialState,
    reducers:{
        inc:(state, action) => {
            ++state.count1
        },
        dec:(state, action) => {
            --state.count1
        },
        reset:(state, action) => {
            state.count1=0
        },
        // getAllUsers:(state, action) => {
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //         .then(value => value.json())
        //         .then(users => state.users = users)
        // }
    }
});

const {reducer:count1Reducer, actions:{inc,dec,reset,getAllUsers}} = count1Slice;

const count1Action = {
    inc,
    dec,
    reset,
    getAllUsers
}

export {
    count1Reducer,
    count1Action
}