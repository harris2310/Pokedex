const fetchPokemonByType = async (type: string) => {
  let pokePromises: Array<any> = [];
  const allTypes = await (await fetch("https://pokeapi.co/api/v2/type")).json();
  let typeFound = allTypes.results.filter((t: any) => t.name === type.toLowerCase());
  console.log(typeFound);
  let typeUrl = typeFound[0].url;
  const pokemonOfType = await (await fetch(typeUrl)).json();
  const pokemonArray = pokemonOfType.pokemon;
  for (let i = 1; i <= 35; i++) {
    const url = pokemonArray[i].pokemon.url;
    console.log(url);
    pokePromises.push(fetch(url).then((res) => res.json()));
  }
  // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
  return Promise.all(pokePromises).then((result) => {
    return result;
  });
};

export default fetchPokemonByType;
