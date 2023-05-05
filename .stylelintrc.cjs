module.exports = {
  extends: 'stylelint-config-standard',
  "rules": {
    "indentation": 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
          ignorePseudoElements: ['v-deep']
      }
    ],
    'number-leading-zero': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source':null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'selector-class-pattern': null,
    'length-zero-no-unit': null,
    'block-opening-brace-space-before':'always',
    'declaration-block-trailing-semicolon':'always',
    'declaration-block-semicolon-newline-after':'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before':'always',
    'declaration-colon-space-after':'always',
    'declaration-colon-space-before':'never',
    'color-hex-length': 'long',
    'color-hex-case':'upper'
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "customSyntax": "postcss-html"
    },
    {
      "files": ["*.scss"],
      "customSyntax": "postcss-scss"
    }
  ]
}