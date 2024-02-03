import { useAtom } from "jotai";
import { useCallback } from "react";
import { favoriteFactsAtom } from "../state/FavoriteFactsStore";

export const useFavoriteCatfacts = () => {
	const [favorites, setFavoriteFacts] = useAtom(favoriteFactsAtom);

	const addToFavorites = useCallback(
		(catfact: string) => {
			if (!favorites.includes(catfact)) {
				setFavoriteFacts((prev) => [...prev, catfact]);
			}
		},
		[setFavoriteFacts, favorites],
	);

	const removeFromFavorites = useCallback(
		(catfact: string) => {
			if (favorites.includes(catfact)) {
				setFavoriteFacts((prev) => prev.filter((fact) => fact !== catfact));
			}
		},
		[setFavoriteFacts, favorites],
	);

	const isFavorite = useCallback(
		(catfact: string) => {
			return favorites.includes(catfact);
		},
		[favorites],
	);

	return {
		favorites,
		addToFavorites,
		removeFromFavorites,
		isFavorite,
	};
};

export type UseFavoriteCatfactsReturn = ReturnType<typeof useFavoriteCatfacts>;
