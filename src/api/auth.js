

export async function login(username, password) {
  const response = await fetch('http://192.168.136.207:3000/auth/login', {
    method: 'POST',
    headers: {
      'Conten-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  if (!response.ok) {
    throw new Error('No\'to\'gri login yoki parol')
  }


  return await  response.json()

}
