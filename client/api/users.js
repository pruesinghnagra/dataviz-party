import request from 'superagent'

const url = '/api/v1/users'

export function getUsers () {
  return request
  .get(url)
  .then(res => res.body)
}
