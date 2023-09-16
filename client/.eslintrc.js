module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": "off",
        "space-in-parens": ["error", "never"],
        "max-len": ["error", { "code": 120 }],
        "no-undef": "off",
    },
};
