module.exports = {
  plugins: [],
  extends: ["eslint:recommended"],
  env: {
    browser: true
  },
  globals: {
    process: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015
  }
}