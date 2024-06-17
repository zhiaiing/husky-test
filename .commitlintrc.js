// 0禁用规则 1警告  2错误
// 具体规则见 https://commitlint.js.org/reference/rules.html

export default = {
    extends: [
      "@commitlint/config-conventional"
    ],
    rules: {
      'type-enum': [2, 'always', [
        'upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert', 'ci', 'test', 'perf', 'build'
       ]],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72]
    }
};