import one from "./one";
import two from "./two";

export default (key) => {
  return {
    one,
    two,
  }[key];
};
