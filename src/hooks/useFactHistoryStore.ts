import { factHistoryAtom } from "../state/FactHistoryStore";
import { useAtom } from "jotai";

export const useFactHistoryStore = () => {
	const [factHistory, setFactHistory] = useAtom(factHistoryAtom);
	return {
		factHistory,
		addFact: (fact: string) => {
			setFactHistory((prev) => [...prev, fact]);
		},
	};
};
