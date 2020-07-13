# eslint-config-react-lens

eslint-config-react-lens 是一个可分享 ESLint 配置包，用于 React+Typescript 或 React+Javascript 项目

该配置是在`eslint-config-ali`的基础上添加了一些规则，删除了一些不太友好的规则

## 用法

1、安装依赖

```
npm -D eslint-config-react-lens
// 安装该配置的一些依赖项：
"eslint-config-ali": "^10.0.0",
"eslint-config-prettier": "^6.11.0",
"eslint-plugin-import": "^2.22.0",
"eslint-plugin-prettier": "^3.1.4",
"eslint-plugin-react": "^7.20.3",
"eslint-plugin-react-hooks": "^4.0.7",
"@typescript-eslint/eslint-plugin": "^3.6.0",
"@typescript-eslint/parser": "^3.6.0"
```

2、在 .eslintrc 文件中配置

```
{
  "extends": "eslint-config-react-lens",
  "rules": {} // 自定义规则，会覆盖eslint-config-react-lens中的规则
}
```
