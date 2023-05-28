
import axios from 'axios';
import *as actionTypes from '../constants/cartConstant';

export const addToCart = (id, qty) => async (dispatch) => {
    try{
        const {data} = await axios.get(`http://localhost:8000/product/${id}`);
        console.log(data);
        dispatch({

            
            type: actionTypes.ADD_TO_CART,
            payload: { 
                ...data,qty
            }
        });
    }
    catch(error)
    {
        dispatch({
            type: actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        });
    }

}


export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
}