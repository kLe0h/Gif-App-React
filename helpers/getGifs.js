
export const getGifs = async (category) => {
  const API = process.env.GIPHY_API_KEY
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${API}&&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
