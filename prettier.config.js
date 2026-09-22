// ESM, not `module.exports`: the package is "type": "module", so a .js file
// here is an ES module and CommonJS syntax throws at load.
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
};
