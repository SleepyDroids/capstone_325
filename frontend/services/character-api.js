// Separate JS file to connect to my mongoDB
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function getAllCharacters() {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}
