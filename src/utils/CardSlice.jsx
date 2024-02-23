import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name:'card',
    initialState:[],
    reducers:{
        cardData: (state, action) => {
            return action.payload;
        },
        increase_quan: (state, action) => {
            const { id,quantity } = action.payload;
            return state.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity + 1 || quantity + 1 )};
                }
                return item;
            });
        },
        decrease_quan: (state, action) => {
            const { id } = action.payload;
            return state.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity - 1 || quantity - 1 )};
                }
                return item;
            });
        },
        remove_prod: (state, action) => {
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        }
    }
});

export const { cardData, increase_quan, decrease_quan, remove_prod } = CardSlice.actions;
export default CardSlice.reducer;