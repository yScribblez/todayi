module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "jest":  true
    },
    "settings": {
      "react": {
        "createClass": "createReactClass",
        "version": "detect",       
        "flowVersion": "0.53" 
      }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
    }
};
