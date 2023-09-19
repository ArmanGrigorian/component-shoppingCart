import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type T_Cart = {
	isOpen: boolean;
};

const Cart = ({ isOpen }: T_Cart) => {
	const { cartItems, closeCart } = useShoppingCart();

	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>

			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => {
						return <CartItem key={crypto.randomUUID()} {...item} />;
					})}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export { Cart };
