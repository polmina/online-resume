import defaultTemplate from "./defaultTemplate";
function store(state = defaultTemplate, action) {
  switch (action.type) {
    case "currentTemplate":
      return { ...state, ["currentTemplate"]: action.value };
    case "currentStyle":
      return { ...state, ["currentStyle"]: action.value };
    default:
      return state;
  }
}
export default store;
