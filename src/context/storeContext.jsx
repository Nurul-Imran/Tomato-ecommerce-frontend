import { createContext, useState } from "react";

import { food_list } from '../assets/assets';

// Create Context
export const storeContext = createContext();


const StoreContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({});
    const [total, setTotal] = useState(0);
    
    // AddToCart
    const addToCart = (itemId) => {
        if(cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1 }))
        }else {
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }

    }

    // RemoveToCart
    const removeToCart = (itemId) => {
        setCartItems( prev => {
            const newCart = {...prev};
            if (newCart[itemId] === 1) {
                delete newCart[itemId];
            }else{
                newCart[itemId] -= 1; 
            }
            return newCart;
        })
    }

    // Remove Whole Cart Item
    const removeWholeCartItem = (id) => {
        setCartItems((prev) => {
            delete prev[id];
            return {...prev}
        })
    }  

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
        removeWholeCartItem,
        total,
        setTotal
    }
    return <storeContext.Provider value={contextValue}>
        {children}
    </storeContext.Provider>
};

export default StoreContextProvider;