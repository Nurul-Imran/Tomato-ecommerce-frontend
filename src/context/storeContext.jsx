import { createContext, useState } from "react";

import { food_list } from '../assets/assets';

// Create Context
export const storeContext = createContext();


const StoreContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({});

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
        setCartItems(prev =>  ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart
    }
    return <storeContext.Provider value={contextValue}>
        {children}
    </storeContext.Provider>
};

export default StoreContextProvider;