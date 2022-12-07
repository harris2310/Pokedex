export const fetchPokemon: any = async (url) => {
  if (url !== undefined) {
    url = url.replace("-species", ""); // Βγαζω το -species απο το string
    const ev = await fetch(url);
    const evData = await ev.json();
    console.log(evData);
  }
};
