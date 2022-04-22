/**
* @author Francisco Gerardi
**/


interface CharacterType {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    episode: string[];
    favorite: boolean;
}

export default CharacterType;