import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/Router";
import {
	CatFactApiService,
	CatFactApiServiceProvider,
} from "./services/APIService";

export const App = () => (
	<CatFactApiServiceProvider value={new CatFactApiService()}>
		<RouterProvider router={router} />
	</CatFactApiServiceProvider>
);
