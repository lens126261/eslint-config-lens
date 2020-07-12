module.exports = {
    extends: [
      "eslint-config-ali/react",
      "eslint-config-ali/typescript/react",
      "prettier" // eslint-config-prettier 可以关闭所有不必要的规则或可能与Prettier冲突的规则。要确保其放在extends数组的最后
    ],
    plugins: ["prettier"], // eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查
    root: true,
    rules: {
      "prettier/prettier": ["error"], // 表示被prettier标记的地方抛出错误信息
      "import/prefer-default-export": 0,
      "@typescript-eslint/indent": 0,
      "no-nested-ternary": 0,
      "react/jsx-indent": 0,
      "react/prop-types": 0,
      "no-script-url": 0,
      "react-hooks/exhaustive-deps": 0,
      "no-param-reassign": 0,
      "require-atomic-updates": 0,
      eqeqeq: 0,
      "react/jsx-no-bind": 0,
      "react/no-array-index-key": 0,
      "no-throw-literal": 0,
      "@typescript-eslint/no-require-imports": 0,
      "react/jsx-indent-props": 0,
      semi: 0,
      "@typescript-eslint/no-empty-interface": 0,
      "default-case": 0,
      "sort-imports": [
        "error",
        {
          ignoreCase: true, // 为true表示：忽略 import 语句本地名称的大小写
          ignoreDeclarationSort: false, // 为true表示：忽略 import 声明语句的排序
          ignoreMemberSort: false, // 为true表示：忽略有多个成员的 import 声明的排序。
          memberSyntaxSortOrder: ["all", "multiple", "single", "none"]
        }
      ]
    },
    globals: {
      dd: false,
      window: false,
      global: false,
      __WPO: false,
      IDLAPI: false
    }
  };
  