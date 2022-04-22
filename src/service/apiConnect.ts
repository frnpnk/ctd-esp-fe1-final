import Character from "../types/character.types";


export const characterFilterAPI = async (
  name?: string
): Promise<Character[]> => {
  let params = "?";
  if (name) {
    params += `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data.results);
};
