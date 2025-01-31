/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@repo/eslint-config/server.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    rules: {
        "no-console": "off",
        "import/no-named-as-default-member": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
    },
};
