import { useCallback, useContext, useState } from "react";
import { catFactApiServiceContext } from "../services/APIService";
import { useFactHistoryStore } from "./useFactHistoryStore";

export const useCatFact = () => {
	const apiService = useContext(catFactApiServiceContext);
	const { addFact, factHistory } = useFactHistoryStore();
	const [loading, setLoading] = useState(false);

	const getNewFact = useCallback(async () => {
		setLoading(true);
		const newFact = await apiService.fact();
		addFact(newFact);
		setLoading(false);
	}, [apiService, addFact]);

	if (!loading && factHistory.length === 0) {
		getNewFact();
	}

	return {
		currentFact: factHistory[factHistory.length - 1],
		getNewFact,
		loading,
	};
};

export type UseCatFactReturn = ReturnType<typeof useCatFact>;
