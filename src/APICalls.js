function getAPIData(info) {
  return fetch (`http://localhost:3001/api/v1/${info}`)
  .then((res)=> res.json())
}

export default getAPIData