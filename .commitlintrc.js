/*
 0禁用规则 1警告  2错误
 具体规则见 https://commitlint.js.org/reference/rules.html
'feat' // 新增功能/特性
'fix' // 修复BUG/问题
'upd' // 更新某功能
'docs' // 变更文档/注释
'style' // 调整代码格式(不影响功能,空格/分号等格式修正)
'types', // 类型声明或修改
'refactor' // 重构代码(不包括修复BUG/新增功能)
'perf' // 优化/性能提升
'test' // 测试(用例)相关
'workflow' // 构建流程/工具变更(修改打包配置等)
'ci' // 持续集成
'revert' // 回滚提交
'merge' // 合并分支
'chore' // 依赖更新/脚手架配置修改
'wip' // 开发中
'mod' // 不确定分类的修改
*/

const allowedTypes = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'];

const errorInfo = `commit类型必须是以下之一:
'feat' // 新增功能/特性
'fix' // 修复BUG/问题
'upd' // 更新某功能
'docs' // 变更文档/注释
'style' // 调整代码格式(不影响功能,空格/分号等格式修正)
'types', // 类型声明或修改
'refactor' // 重构代码(不包括修复BUG/新增功能)
'perf' // 优化/性能提升
'test' // 测试(用例)相关
'workflow' // 构建流程/工具变更(修改打包配置等)
'ci' // 持续集成
'revert' // 回滚提交
'merge' // 合并分支
'chore' // 依赖更新/脚手架配置修改
'wip' // 开发中
'mod' // 不确定分类的修改
例如: 
    git commit -m "feat: 新增分页功能"
`

export default {
    extends: [
        "@commitlint/config-conventional",
    ],
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
        'type-enum': [0],
        'function-rules/type-enum': [2, 'always', (parsed) => {
            const type = parsed.type;
            if (!type || !allowedTypes.includes(type)) {
                return [false, errorInfo];
            }
            return [true];
        }],
        'subject-empty': [0],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72]
    },
};