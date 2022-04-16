import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStat = { counter: 0, showCounter: true };

// ================================= With redux toolkit ================
// creating slice of global state
const counterSlice = createSlice({
    name: 'counter',
    initialStat: initialStat ,       //initialState: initialState
    reducers: {
        // each method will automatically receive latest state
        increment(state) {
            state.counter++;
         },
        decrement(state) {
            if (state.counter > 0) {
                state.counter--;
            }
            
        },
        // if we need aditional data to access we need to add action as parameter. Otherwise we only declare state as parameter.
        increse(state, action) {
            state.counter = state.counter + action.payload;
         },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
         }
        
    }
})

// ======================== Without Toolkit =====================

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increse') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (state.counter>0 && action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }
// const store = createStore(counterSlice.reducer);


const stor = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default stor;

