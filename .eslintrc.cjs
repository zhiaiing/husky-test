module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        // "@antfu",
        "plugin:@typescript-eslint/recommended"
    ],
    // "parser": "@typescript-eslint/parser",
    parserOptions: {
            extraFileExtensions: ["vue"],
            parser: '@typescript-eslint/parser', // 解析ts
            ecmaVersion: 2020,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            tsconfigRootDir: __dirname,
            project: ['./tsconfig.json'], // eslint规则
        // "project": ["./tsconfig.json"],
    },
    // "plugins": [
    //     "@typescript-eslint"
    // ],
    plugins: ['@typescript-eslint'],
    parser: 'vue-eslint-parser',
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ]
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}