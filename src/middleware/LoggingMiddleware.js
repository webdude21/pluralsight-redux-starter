export default function loggerMiddleware() {
  return function (next) {
    return function (action) {
      if (typeof action.type === 'string') {
        console.log('Action fired: ', action);
      }

      return next(action);
    };
  };
}
