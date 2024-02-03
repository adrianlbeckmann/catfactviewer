import { Fact } from "../components/Fact";
import { useFactHistoryStore } from "../hooks/useFactHistoryStore";

export const CatFactHistoryPage: React.FC = () => {
	const { factHistory } = useFactHistoryStore();

	return (
		<>
			<h2>CAT FACT HISTORY</h2>
			<ul className="facts-list">
				{factHistory.map((fact) => (
					<Fact key={fact.substring(0, 10)} fact={fact} />
				))}
			</ul>
		</>
	);
};
