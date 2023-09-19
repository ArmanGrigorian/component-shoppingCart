import { ReactNode, createContext, useContext, useState } from "react";

type T_ShoppingCartProviderPops = {
	children: ReactNode;
};

type T_CartItem = {
	id: number;
	quantity: number;
};

type T_ShoppingCartContext = {
	getQuantity: (id: number) => number;
	increaseQuantity: (id: number) => void;
	decreaseQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as T_ShoppingCartContext);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: T_ShoppingCartProviderPops) {
	const [cartItems, setCartItems] = useState<T_CartItem[]>([]);

	function getQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseQuantity(id: number) {
		setCartItems((prevItems) => {
			if (prevItems.find((item) => item.id === id) == null) {
				return [...prevItems, { id, quantity: 1 }];
			} else {
				return prevItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else return item;
				});
			}
		});
	}

	function decreaseQuantity(id: number) {
		setCartItems((prevItems) => {
			if (prevItems.find((item) => item.id === id)?.quantity === 1) {
				return prevItems.filter((item) => item.id !== id);
			} else {
				return prevItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else return item;
				});
			}
		});
	}

	function removeFromCart(id: number) {
		setCartItems((prevItems) => {
			return prevItems.filter((item) => item.id !== id);
		});
	}

	return (
		<ShoppingCartContext.Provider
			value={{ getQuantity, increaseQuantity, decreaseQuantity, removeFromCart }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
