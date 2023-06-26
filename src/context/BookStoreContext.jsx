import { createContext } from "react";

const BookStoreContext = createContext({
    theme: false,
    changeTheme: () => {},
    cartList: [],
    addCartItem: () => {},
    removeCartItem: () => {},
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {},
})

export default BookStoreContext