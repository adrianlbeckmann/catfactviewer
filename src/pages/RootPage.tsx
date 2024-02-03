import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const RootPage = () => (
	<>
		<Header />
		<main className="content">
			<Outlet />
		</main>
	</>
);
