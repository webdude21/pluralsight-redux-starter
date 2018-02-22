const production = process.env.NODE_ENV === "production";
module.exports = production ? require('./configureStore.prod') : require('./configureStore.dev');
