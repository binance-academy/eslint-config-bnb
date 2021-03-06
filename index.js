module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "react/forbid-prop-types": [1, { forbid: ["any"] }],
    "react/prop-types": ["error", { ignore: ["children"] }],
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
