module.exports = {
    env : {
        browser : true,
        es2021 : true
    },
    extends : [
        'plugin:vue/essential',
        'standard'
    ],
    parserOptions : {
        ecmaVersion : 12,
        sourceType : 'module'
    },
    plugins : [
        'vue'
    ],
    rules : {
        camelcase : 2, // 强制驼峰法命名,
        indent : [2, 4], // 缩进风格
        'id-match' : 0, // 命名检测
        'init-declarations' : 1, // 声明时必须赋初值
        'no-console' : 1, // 不能有未定义的变量
        'no-var' : 2, // 不允许使用var
        'no-undef' : 2, // 不能有未定义的变量
        'no-multi-assign' : 2, // 禁止连续赋值
        'no-multi-spaces' : 'error', // 禁止出现多个空格
        'block-spacing' : 'error', // 强制括号前后至少一个空格
        quotes : ['error', 'single'], // 禁止出现双引号
        'jsx-quotes' : ['error', 'prefer-double'], //  (默认) 强制所有不包含双引号的 JSX 属性值使用双引号
        'key-spacing' : ['error', { beforeColon : true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
        'no-nested-ternary' : 2, // 禁用嵌套的三元表达式
        'new-cap' : 'error', // 要求构造函数必须首字母大写开头
        'semi-style' : ['error', 'last'], // 强制分号的位置
        'space-infix-ops' : ['error', { int32Hint : true }], // 操作符前后要带空格
        'spaced-comment' : ['error', 'always'], // 注释符后面必须有一个空白
        eqeqeq : 'error' // 强制使用 === 和 !==
    }
}
