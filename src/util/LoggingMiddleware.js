export default function loggerMiddleware() {
  return function (next) {
    return function (action) {
      if (typeof action.type === 'string') {
        console.log(`Action ${action.type} with value: `);
        console.dir(action);
      }

      return next(action);
    };
  };
}
