const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const searchResults = async (username) => {
  let params = new URLSearchParams({
    q: username
  })
  let response = await fetch(`${GITHUB_URL}/search/users?${params}` , {
      header: { 
          Authorization: `token ${GITHUB_TOKEN}`
      }
  })
  let {items} = await response.json()
  return items
} 

export const getUserRepos = async (username) => {
  let params = new URLSearchParams({
    sort: "created",
    per_page: 10
  })

  let response = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}` , {
      header: { 
          Authorization: `token ${GITHUB_TOKEN}`
      }
  })
  let data = await response.json()
  return data
}

export const getUser = async (username) => {
  let response = await fetch(`${GITHUB_URL}/users/${username}` , {
      header: { 
          Authorization: `token ${GITHUB_TOKEN}`
      }
  })
  console.log(username)
  if (response.status === 404) {
    window.location = "/notfound"
  } else {
    let data = await response.json()
    return data
  } 
}