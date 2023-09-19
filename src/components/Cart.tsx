import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

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
					<div className="ms-auto fw-bold fs-5">
						<span>
							Total:{" "}
							{formatCurrency(
								cartItems.reduce((total, cartItem) => {
									const item = storeItems.find((item) => item.id === cartItem.id);
									return total + (item?.price || 0) * cartItem.quantity;
								}, 0),
							)}
						</span>
					</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export { Cart };
