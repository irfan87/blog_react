// useFetch is the custom hook to fetch and process the API
import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
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
					setIsLoading(false);
					setError(e.message);
				});
		}, 200);
	}, [url]);

	return {
		data,
		isLoading,
		error,
	};
};

export default useFetch;
