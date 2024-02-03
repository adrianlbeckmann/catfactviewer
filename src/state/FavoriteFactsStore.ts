import { atomWithStorage } from "jotai/utils";
import { Fact } from "../types/Fact";

const FAVORITES_STORAGE_KEY = "favorite facts";

export const favoriteFactsAtom = atomWithStorage<Fact[]>(
	FAVORITES_STORAGE_KEY,
	[],
);
