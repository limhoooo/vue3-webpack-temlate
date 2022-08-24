// npm i -D eslint eslint-plugin-vue babel-eslint

module.exports = {
    env: {
        browser: true, // 브라우저 동작
        node: true // 노드js에서 동작
    },
    extends: [
        // vue
        //'plugin:vue/vue3-essential', // Lv1
        'plugin:vue/vue3-strongly-recommended', // Lv2
        //'plugin:vue/vue3-recommended', // Lv3
        // js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: { // 규칙
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}