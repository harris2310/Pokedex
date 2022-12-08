import { isConstructorDeclaration } from "typescript";

const fetchPokemonInit = (favouritesFetch: any) => {
  let pokePromises: Array<any> = [];
  // Κακος κωδικας, πολυ συγκεκριμενος
  // if there are favourites
  if (favouritesFetch !== null && favouritesFetch.length !== 0) {
    favouritesFetch.forEach((f: string) => {
      let url = `https://pokeapi.co/api/v2/pokemon/${f}`;
      pokePromises.push(fetch(url).then((res) => res.json()));
    });
  }
  for (let i = 1; i <= 15; i++) {
    console.log(favouritesFetch);
    if (!favouritesFetch.includes(i)) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      pokePromises.push(fetch(url).then((res) => res.json()));
    }
  }
  // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
  return Promise.all(pokePromises).then((result) => {
    return result;
  });
};

export default fetchPokemonInit;
