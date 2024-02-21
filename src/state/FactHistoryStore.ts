// FactHistoryStore.ts
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { FactHistory } from "../types/FactHistory";

const FACT_HISTORY_STORAGE_KEY = "fact-history";

const factHistoryAtom = atomWithStorage<FactHistory>(
	FACT_HISTORY_STORAGE_KEY,
	[],
);

export const useFactHistoryStore = () => {
	const [factHistory, setFactHistory] = useAtom(factHistoryAtom);
	return {
		factHistory,
		addFact: (fact: string) => {
			setFactHistory((prev) => [...prev, fact]);
		},
	};
};
