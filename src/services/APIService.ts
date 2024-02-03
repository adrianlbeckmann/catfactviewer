import { createContext } from "react";

export interface ICatFactApiService {
	fact(): Promise<string>;
}

export class CatFactApiService implements ICatFactApiService {
	async fact(): Promise<string> {
		const response = await fetch("https://catfact.ninja/fact");
		const data = await response.json();
		return data.fact;
	}
}

export class TestCatFactApiService implements ICatFactApiService {
	async fact(): Promise<string> {
		return "test catfact";
	}
}

export const catFactApiServiceContext = createContext<ICatFactApiService>(
	new CatFactApiService(),
);
export const CatFactApiServiceProvider = catFactApiServiceContext.Provider;
