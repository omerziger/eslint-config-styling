module.exports = {
    rules: {
        //General
        'multiline-ternary': ['error', 'always-multiline',],
        'no-extra-parens': 'error',
        'semi': ['error', 'never',],
        'nonblock-statement-body-position': 'error',
        'max-len': ['error', {
            'code': 140,
            'tabWidth': 2,
            'comments': 140,
            'ignoreUrls': true,
            'ignoreRegExpLiterals': true,
        },],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'max-statements-per-line': ['error', { 'max': 1, },],
        'no-multi-spaces': ['error', {
            exceptions: {
                'Property': true,
                'BinaryExpression': true,
                'VariableDeclarator': true,
                'ImportDeclaration': true,
            },
        },],
        'eol-last': ['error', 'always',], //Empty line at the end of files (for scripts)

        //Spacing
        'array-bracket-spacing': ['error', 'always', { 'singleValue': false, },],
        'arrow-spacing': 'error',
        'comma-spacing': 'error',
        'block-spacing': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'rest-spread-spacing': ['error', 'never',],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'switch-colon-spacing': 'error',

        //Indentation
        'indent': ['error', 2, {
            'SwitchCase': 1,
            'outerIIFEBody': 4,
            'MemberExpression': 0,
            'FunctionDeclaration': { 'parameters': 'first', },
            'FunctionExpression': { 'parameters': 'first', },
            'CallExpression': { 'arguments': 'first', },
            'ArrayExpression': 1,
            'ObjectExpression': 1,
            'ImportDeclaration': 1,
            'flatTernaryExpressions': true,
            'offsetTernaryExpressions': true,
            'ignoreComments': true,
        },],

        //Quotes
        'quotes': ['error', 'single',],
        'jsx-quotes': ['error', 'prefer-single',],

        //Objects
        'object-curly-newline': ['error', { 'multiline': true, },],

        //Arrays
        'array-element-newline': ['error', { 'minItems': 4, },],

        //Functions
        'function-paren-newline': 'error',

        //Arrow Functions
        'arrow-parens': ['error', 'as-needed',],

        //Braces
        'brace-style': ['error', 'stroustrup',],

        //Commas
        'comma-dangle': ['error', {
            'arrays': 'always',
            'objects': 'always',
            'functions': 'never',
        },],
        'comma-style': ['error', 'last',],
    }
}