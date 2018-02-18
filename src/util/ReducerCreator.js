let createReducer = actionMap => (state = [], action) => {
  let actionFunction = actionMap[action.type];
  return actionFunction ? actionFunction(state, action) : state;
};

export default createReducer;
