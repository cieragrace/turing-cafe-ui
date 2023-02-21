function getAPIData() {
  return fetch ('http://localhost:3001/api/v1/reservations')
  .then((res)=> res.json())
}

export default getAPIData