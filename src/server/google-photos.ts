import axios from 'axios'

const regex =
  /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content: string) {
  const links = new Set()
  let match
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(content))) {
    links.add(match[1])
  }
  return Array.from(links)
}

export async function getAlbum(id: string) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`)
  return extractPhotos(response.data)
}
