import { Link } from "@tanstack/react-router";

export const Navigation = () => (
	<nav>
		<Link to="/">CAT FACTS</Link>
		<Link to="/favorites">FAVORITE CAT FACTS</Link>
		<Link to="/history">CAT FACT HISTORY</Link>
	</nav>
);
