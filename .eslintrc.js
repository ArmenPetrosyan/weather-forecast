const path = require('path');
const projectPath = path.resolve(__dirname, './');

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".js"] }],
    "import/no-cycle": 0,
    "react/button-has-type": 0,
    "import/named": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "alias": {
          Root: path.resolve(projectPath, 'src/'),
          Components: path.resolve(projectPath, 'src/view/components/'),
          View: path.resolve(projectPath, 'src/view/'),
        }
      }
    }
  }
};
