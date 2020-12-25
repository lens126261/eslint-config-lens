var prettier= require("./prettier");

module.exports = {
  extends: ["eslint-config-ali/vue", "prettier", "prettier/vue"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", prettier],
  },
};
