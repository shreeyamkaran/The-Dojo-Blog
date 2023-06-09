import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        function fetchFromServer() {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resourse');
                }
                return res.json();
            }).then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Fetch request aborted');
                }
                else {
                    setData(null);
                    setIsLoading(false);
                    setError(err.message);
                }
            });
        }
        fetchFromServer();

        return () => abortCont.abort();

    }, [url]);

    return { data, isLoading, error };
}