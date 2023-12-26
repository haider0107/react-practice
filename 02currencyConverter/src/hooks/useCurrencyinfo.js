import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        setData(response.data[currency]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currency]);

  return data;
}

export default useCurrencyinfo;
