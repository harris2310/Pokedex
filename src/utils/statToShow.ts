export const statToShow = (s: { stat: { name: string } }) => {
  let statToShow;
  if (s.stat.name == "attack") {
    statToShow = "ATK";
  } else if (s.stat.name == "defense") {
    statToShow = "DEF";
  } else if (s.stat.name == "special-attack") {
    statToShow = "S-ATK";
  } else if (s.stat.name == "special-defense") {
    statToShow = "S-DEF";
  } else if (s.stat.name == "speed") {
    statToShow = "SPD";
  } else if (s.stat.name == "hp") {
    statToShow = "HP";
  }
  return statToShow;
};
