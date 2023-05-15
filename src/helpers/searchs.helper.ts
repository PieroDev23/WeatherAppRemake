import applicationLogger from "@utils/logger.utils";
import { getPlaces } from "@services/axios.service";
import { formatPlaces } from "./mapping-functions.helper";

export async function searchPlace(place: string) {
  try {
    const suggestions = await getPlaces(place);
    return formatPlaces(suggestions.data);
  } catch (err) {
    applicationLogger.log("error", "place could not be founded", () => {
      console.error(err);
    });

    return [];
  }
}
