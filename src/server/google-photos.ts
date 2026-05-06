const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content: string) {
  const links = new Set<string>();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
}

export async function getAlbum(id: string): Promise<string[]> {
  const response = await fetch(`https://photos.app.goo.gl/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Google Photos album: ${response.status}`);
  }
  return extractPhotos(await response.text());
}
