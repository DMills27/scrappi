'use strict';

function post(endpoint, body) {
  var json = void 0;
  try {
    json = JSON.stringify(body);
  } catch (error) {
    throw error;
  }

  fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: json
  });
}

module.export = { post: post };