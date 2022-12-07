const fetchPokemonInit = () => {
  let pokePromises: Array<any> = [];
  let value: Array<any> = [];
  for (let i = 1; i <= 15; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokePromises.push(fetch(url).then((res) => res.json()));
  }
  // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
  return Promise.all(pokePromises).then((result) => {
    return result;
  });
};

export default fetchPokemonInit;
