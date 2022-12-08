const fetchRandom = () => {
  let pokePromises: Array<any> = [];
  let value: Array<any> = [];
  for (let i = 1; i <= 15; i++) {
    let randomNum = Math.floor(Math.random() * (900 - 1) + 1);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    pokePromises.push(fetch(url).then((res) => res.json()));
  }
  // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
  return Promise.all(pokePromises).then((result) => {
    return result;
  });
};

export default fetchRandom;
