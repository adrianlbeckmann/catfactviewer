import { useMemo } from "react";
import { useFavoriteCatfacts } from "../hooks/useFavoriteCatfacts";

export type FactProps = {
	fact: string;
};

export const Fact: React.FC<FactProps> = ({ fact }) => {
	const { isFavorite, removeFromFavorites, addToFavorites } =
		useFavoriteCatfacts();
	const isFav = useMemo(() => isFavorite(fact), [fact, isFavorite]);
	return (
		<div className={`fact ${isFav ? "favorite" : ""}`}>
			{fact}
			<button
				type="button"
				className={isFav ? "remove-favorite" : "add-favorite"}
				onClick={() =>
					isFav ? removeFromFavorites(fact) : addToFavorites(fact)
				}
			>
				{isFav ? "REMOVE" : "ADD"}
			</button>
		</div>
	);
};
