const isFunction = function (prop) {
  return typeof prop === "function";
};

const bindMethods = function (props, object, proto) {
  props
    .filter(prop => isFunction(object[prop]))
    .filter(prop => prop !== "constructor")
    .forEach(func => object[func] = proto[func].bind(object));
};

export function bindAllMethods(object) {
  let proto = Object.getPrototypeOf(object);
  let props = Object.getOwnPropertyNames(proto);

  bindMethods(props, object, proto);
}

export function bindSelectedMethods(object, ...methods) {
  let proto = Object.getPrototypeOf(object);
  let props = Object.getOwnPropertyNames(proto);

  props.filter(prop => methods.includes(prop));

  bindMethods(props, object, proto);
}
