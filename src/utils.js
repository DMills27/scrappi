import fetch from 'node-fetch'

export const post = (endpoint: string, body: any) => {
  let json
  try {
    json = JSON.stringify(body)
  } catch (error) {
    throw error
  }

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: json
  })
}
