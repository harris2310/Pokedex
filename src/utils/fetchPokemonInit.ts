const fetchPokemonInit = (favouritesFetch: any) => {
  let pokePromises: Array<any> = [];
  let urls: Array<string> = [];
  console.log(favouritesFetch);
  // if there are favourites
  // Ασχημο
  if (favouritesFetch !== null) {
    if (favouritesFetch.length !== 0) {
      favouritesFetch.forEach((f: string) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${f}`;
        urls.push(url);
        pokePromises.push(fetch(url).then((res) => res.json()));
      });
    }
  }
  for (let i = 1; i <= 35; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    console.log(urls.length);
    if (urls.length !== 0) {
      if (!urls.includes(url)) {
        pokePromises.push(fetch(url).then((res) => res.json()));
      }
    } else {
      pokePromises.push(fetch(url).then((res) => res.json()));
    }
  }
  // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
  return Promise.all(pokePromises).then((result) => {
    return result;
  });
};

export default fetchPokemonInit;
