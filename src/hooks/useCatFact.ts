import { useCallback, useContext, useState } from "react";
import { catFactApiServiceContext } from "../services/APIService";
import { useFactHistoryStore } from "./useFactHistoryStore";

export const useCatFact = () => {
	const apiService = useContext(catFactApiServiceContext);
	const { addFact, factHistory } = useFactHistoryStore();
	const [currentFact, setCurrentFact] = useState(
		factHistory[factHistory.length - 1],
	);
	const [loading, setLoading] = useState(false);

	const getNewFact = useCallback(async () => {
		setLoading(true);
		const newFact = await apiService.fact();
		setCurrentFact(newFact);
		addFact(newFact);
		setLoading(false);
	}, [apiService, addFact]);

	if (!loading && !currentFact) {
		getNewFact();
	}

	return {
		currentFact,
		getNewFact,
		loading,
	};
};

export type UseCatFactReturn = ReturnType<typeof useCatFact>;
