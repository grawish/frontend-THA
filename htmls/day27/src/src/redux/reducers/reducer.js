const updateReducer = (state={
  email: '', name:''
}, action) => {
  if (action.type === "uName") {
    state.name=action.value;
    console.log(state);
    return state;
  }
  if (action.type === "uEmail") {
    state.email=action.value;
    console.log(state);
    return state;
  }
  return state;
}
export default updateReducer;