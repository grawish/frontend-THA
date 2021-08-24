const updateName = value => {
  return {
    type: "uName",
    value: value
  }
}
const updateEmail = value => {
  return {
    type: "uEmail",
    value: value
  }
}

export { updateName, updateEmail }