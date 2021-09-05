import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // make sure to include [url] as dependency
  // to ensure that this function runs whenever url changes
  useEffect(() => {
    // mimic 1 sec response time
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // handle server errors
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);

          setError(null);
        })
        // server error: e.g. server unreachable
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
