module.exports = {
    rules: {
        //General
        'multiline-ternary': ['error', 'always-multiline',],
        'no-extra-parens': 'error',
        'semi': ['error', 'never',],
        'nonblock-statement-body-position': 'error',
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
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'operator-linebreak': [ 'error', 'before' ],
        'eol-last': ['error', 'always',], //Empty line at the end of files (for scripts)

        //Spacing
        'array-bracket-spacing': ['error', 'always'],
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
        'indent': ['error', 4, {
            'SwitchCase': 1,
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

        //Newlines
        'object-curly-newline': ['error', { 'multiline': true, },],
        'array-element-newline': ['error', { 'minItems': 4, 'multiline': true},],
        'function-paren-newline': 'error',

        //Quotes
        'quotes': ['error', 'single',],
        'jsx-quotes': ['error', 'prefer-single',],

        //Arrow Functions
        'arrow-parens': ['error', 'as-needed',],

        //Braces
        'brace-style': ['error', '1tbs',],

        //Commas
        'comma-dangle': ['error', 'always-multiline'],
        'comma-style': ['error', 'last',],
    }
}