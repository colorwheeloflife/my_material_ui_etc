const base = require('../webpack.config');

module.exports = (storybook, type) => {
  return {
    ...storybook,
    module: {
      rules: [
        ...storybook.module.rules,
        ...base.module.rules.splice(1)
      ]
    }
  }
};