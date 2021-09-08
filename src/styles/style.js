import light from "./light";
import dark from "./dark";
import red from "./red";

export default (key) => {
  return {
    light,
    dark,
    red,
  }[key];
};
