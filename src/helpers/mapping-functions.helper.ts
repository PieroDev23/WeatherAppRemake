import { Place } from "@interfaces/app.interfaces";
import { FeatureCollection } from "@interfaces/services.interfaces";
import chalk from "chalk";
import { ListChoiceOptions } from "inquirer";

function formatPlaces(featureCollection: FeatureCollection): Array<Place> {
  return featureCollection.features.map((feature) => {
    return {
      id: feature.id,
      name: feature.place_name,
      lon: feature.center.at(0) || 0,
      lat: feature.center.at(1) || 0,
    };
  });
}

function formatChoices<T extends Place>(
  list: Array<T>
): Array<ListChoiceOptions> {
  const formatList = list.map((el, idx) => ({
    value: el.id,
    name: `${chalk.blueBright(idx + 1)}. ${el.name}`,
  }));

  formatList.unshift({
    value: "0",
    name: `${chalk.blueBright(0)}. Exit`,
  });

  return formatList;
}

export { formatPlaces, formatChoices };
