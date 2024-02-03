import { Fact } from "../components/Fact";
import { useFavoriteCatfacts } from "../hooks/useFavoriteCatfacts";

export const FavoriteCatFactsPage: React.FC = () => {
	const { favorites } = useFavoriteCatfacts();

	return (
		<>
			<h2>FAVORITE CAT FACTS</h2>
			<ul className="facts-list">
				{Array.from(favorites).map((fact) => (
					<Fact key={fact.substring(0, 10)} fact={fact} />
				))}
			</ul>
		</>
	);
};
