export const userNameExists = async (value) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?username=Bret')
  const data = await response.json()
  if (data[0].username === value) {
    return true
  }
  return false
}
