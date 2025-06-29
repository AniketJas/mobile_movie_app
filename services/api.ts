export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`
      }
}

export const fetchMovie = async ({query}:{query: string}) => {
  const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers
  })

  if(!response.ok){
    //@ts-ignore
    throw new Error("Falied to fetch movie list: ", response.statusText);
  }

  const data = await response.json();
  console.log("Movie list generated")
  return data.results;
}