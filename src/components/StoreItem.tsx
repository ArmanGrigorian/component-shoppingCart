import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();

	const quantity = getQuantity(id);

	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={imgUrl}
				style={{
					height: "200px",
					objectFit: "cover",
				}}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-3">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseQuantity(id)}>
							+ Add To Cart
						</Button>
					) : (
						<div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
							<div
								className="d-flex justify-content-center align-items-center"
								style={{ gap: "0.5rem" }}>
								<Button onClick={() => decreaseQuantity(id)}>-</Button>
								<div>
									<span className="fs-4">{quantity}</span>
									<span> in cart</span>
								</div>
								<Button onClick={() => increaseQuantity(id)}>+</Button>
							</div>
							<Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export { StoreItem };
