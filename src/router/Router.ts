import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { CatFactsPage } from "../pages/CatFactsPage";
import { RootPage } from "../pages/RootPage";
import { FavoriteCatFactsPage } from "../pages/FavoriteCatFactsPage";
import { CatFactHistoryPage } from "../pages/CatFactHistoryPage";

const rootRoute = createRootRoute({
	component: RootPage,
});

const factsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: CatFactsPage,
});

const favoritesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/favorites",
	component: FavoriteCatFactsPage,
});

const historyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/history",
	component: CatFactHistoryPage,
});

const routeTree = rootRoute.addChildren([
	factsRoute,
	favoritesRoute,
	historyRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
