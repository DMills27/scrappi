'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialConfig = {
  target: 'https://google.com',
  endpoint: 'https://google.com',
  interval: 500,
  onDocumentReceived: function onDocumentReceived() {}
};

function createConfig(config) {
  if (!config.target) {
    throw new Error('Target URL not found in configuration object.');
  }
  return _extends({}, config, initialConfig);
}

module.exports = { createConfig: createConfig };