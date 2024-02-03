// CatFactsPage.tsx
import { Fact } from "../components/Fact";
import { useCatFact } from "../hooks/useCatFact";

export const CatFactsPage: React.FC = () => {
	const { currentFact, getNewFact } = useCatFact();
	if (!currentFact) return <div>LOADING...</div>;
	return (
		<>
			<h2>CAT FACT</h2>
			<Fact fact={currentFact} />
			<button type="button" onClick={getNewFact}>
				NEW FACT
			</button>
		</>
	);
};
