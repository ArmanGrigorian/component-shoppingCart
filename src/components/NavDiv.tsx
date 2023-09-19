import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavDiv = () => {
	return (
		<Navbar sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to="/" as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to="/store" as={NavLink}>
						Store
					</Nav.Link>
					<Nav.Link to="/about" as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{
						width: "3rem",
						height: "3rem",
						position: "relative",
					}}
					variant="outline-primary">
					<AiOutlineShoppingCart />
					<div
						className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: "-7px",
							right: "-7px",
						}}>
						3
					</div>
				</Button>
			</Container>
		</Navbar>
	);
};

export { NavDiv };
