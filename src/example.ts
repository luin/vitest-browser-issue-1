import isEqual from "lodash.isequal";

export const myIsEqual = (a: unknown, b: unknown) => {
  return isEqual(a, b);
};
