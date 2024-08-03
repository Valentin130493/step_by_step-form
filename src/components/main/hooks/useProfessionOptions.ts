import { useEffect, useState } from "react";
import { getSelectOptions } from "../../helpers/getSelectOptions.ts";

export function useProfessionOptions() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products/category-list")
        .then((res) => res.json())
        .then((res) => setOptions(res));
    } catch (e) {
      throw new Error(`${e}`);
    }
  }, []);

  const jobSelectOptions = getSelectOptions(options);
  return jobSelectOptions;
}
