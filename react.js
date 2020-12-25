var prettier = require("./prettier");

module.exports = {
  extends: [
    "eslint-config-ali/typescript/react",
    "eslint-config-ali/jsx-a11y",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["prettier"],
  root: true, // 停止在父级目录中寻找
  rules: {
    "prettier/prettier": ["error", prettier],
    "react/prop-types": 0,
    "generator-star-spacing": 0,
  },
  globals: {},
};
