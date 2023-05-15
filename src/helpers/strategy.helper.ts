import SearchComponent from "@components/search.component";
import applicationLogger from "@utils/logger.utils";

import { searchPlace } from "./searchs.helper";
import { PlacesComponent } from "@components/places.component";

// eslint-disable-next-line @typescript-eslint/ban-types
type MapStrategies = { [k: number]: Function };

const MenuStrategies: MapStrategies = {
  0: exit,
  1: searchs,
  2: history,
};

async function searchs() {
  const { place } = await SearchComponent();
  const places = await searchPlace(place);

  if (!places) {
    applicationLogger.log("error", "Features is undefiend");
    throw new Error("Features is undefined");
  }

  const location = await PlacesComponent(places);
  //TODO: Find current object, send objet to Weather API and implemente it
}

async function history() {
  throw new Error("not Implemented");
}

function exit() {
  return null;
}

export default MenuStrategies;
