import React from "react";
import axios from "axios";
const useFetch = (async) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setResponse(res);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);
  return { response, error };
};
export default useFetch;
