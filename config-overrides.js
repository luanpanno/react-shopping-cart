const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
  const paths = configPaths('tsconfig.paths.json');

  console.log(`Override Paths Alias:`, paths);

  alias({ ...paths })(config);

  return config;
};
