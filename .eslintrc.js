module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  extends: [
    'airbnb-base', // Adicionaas regras do Airbnb Style Guide
    'plugin:@typescript-eslint/recommended', // Adiciona as recomendações padrões @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Adiciona as configurações do prettier para evitar conflitos de regras @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Adiciona o plugin do prettier
  ],
};
