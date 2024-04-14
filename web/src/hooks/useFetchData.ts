import { useState, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";

const useFetchData = <T>(url: string) => {
	const [data, setData] = useState<T>();
	useEffect(() => {
		axios
			.get(url)
			.then((response: AxiosResponse<T>) => {
				setData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [url]);
	return data;
};

export default useFetchData;
