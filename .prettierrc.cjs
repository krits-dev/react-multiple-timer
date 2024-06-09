module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  importOrder: [
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^(assets|styles|constants|services|utils|store|routes|components|modules|pages)(/(.*))?$',
    '^[./]',
  ],
  importOrderSeparation: true,
}
