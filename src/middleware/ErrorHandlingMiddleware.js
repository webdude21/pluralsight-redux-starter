import toastr from 'toastr';

export default function loggerMiddleware() {
  return function (next) {
    return function (action) {
      const { type, err } = action;

      if (type.endsWith("ERROR")) {
        toastr.error(err);
      }

      return next(action);
    };
  };
}
