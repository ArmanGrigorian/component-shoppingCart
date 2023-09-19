import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type T_CartItemProps = {
	id: number;
	quantity: number;
};

const CartItem = ({ id, quantity }: T_CartItemProps) => {
	const { removeFromCart } = useShoppingCart();

	const item = storeItems.find((item) => item.id === id);

	if (item == null) return null;

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img
				src={item.imgUrl}
				alt={`image of ${item.name}`}
				style={{
					width: "125px",
					height: "75px",
					objectFit: "cover",
				}}
			/>
			<div className="me-auto">
				<div>
					<span>{item.name}</span>
					{quantity > 1 && <span className="text-muted"> {quantity}x</span>}
				</div>
				<div className="text-muted" style={{ fontSize: "0.75rem" }}>
					{formatCurrency(item.price * quantity)}
				</div>
			</div>
			<Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
				&times;
			</Button>
		</Stack>
	);
};

export { CartItem };
