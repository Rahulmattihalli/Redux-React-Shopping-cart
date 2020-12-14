import { FETCH_PRODUCTS } from "../Components/type";

export const FetchReducer = (state={},action)=>{

    switch(action.type){

        case FETCH_PRODUCTS: 
        return {items:action.payload}
        default:
            return state;

    }




}