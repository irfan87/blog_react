// useFetch is the custom hook to fetch and process the API
import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// abortController will trigger when the browser abort the session
		// check the AbortController in https://developer.mozilla.org/en-US/docs/Web/API/AbortController
		const abortController = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((res) => {
					if (!res.ok) {
						// throw Error("Unable to fetch the data from the server");
						throw Error(`${res.url} - ${res.statusText}`);
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((e) => {
					if (e.name === "AbortError") {
						console.log("fetch aborted");
					} else {
						setIsLoading(false);
						setError(e.message);
					}
				});
		}, 1000);

		return () => abortController.abort();
	}, [url]);

	return {
		data,
		isLoading,
		error,
	};
};

export default useFetch;
