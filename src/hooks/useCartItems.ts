import { useContext } from "react";
import { CartItemsContext } from "../providers/CartItemsProvider";

const useCartItems = () => useContext(CartItemsContext);

export default useCartItems;