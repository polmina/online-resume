import light from "./light";
import dark from "./dark";
import red from "./red";
import green from "./green";
import blue from "./blue";

export default (key) => {
  return {
    light,
    dark,
    red,
    green,
    blue,
  }[key];
};
