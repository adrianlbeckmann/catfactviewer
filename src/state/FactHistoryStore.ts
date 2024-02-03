// FactHistoryStore.ts
import { atomWithStorage } from "jotai/utils";
import { FactHistory } from "../types/FactHistory";

const FACT_HISTORY_STORAGE_KEY = "fact-history";

export const factHistoryAtom = atomWithStorage<FactHistory>(
	FACT_HISTORY_STORAGE_KEY,
	[],
);
