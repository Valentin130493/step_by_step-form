import { capitalize } from "./capitalaze.ts";

export const getSelectOptions = (array: string[]) => {
  return (
    array?.map((category) => ({
      value: category,
      label: capitalize(category),
    })) || []
  );
};
