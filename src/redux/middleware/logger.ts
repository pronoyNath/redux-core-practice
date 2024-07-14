const Logger = (state) => (next) => (action) => {
  console.log(state);
  console.log(next(action));
  next(action)
  console.log(action);
};

export default Logger;
