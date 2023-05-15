import { formatChoices } from "@helpers/mapping-functions.helper";
import { Place } from "@interfaces/app.interfaces";
import inquirer, { Answers, QuestionCollection } from "inquirer";

export async function PlacesComponent(places: Array<Place>) {
  const choices = formatChoices(places);

  const quiestions: QuestionCollection<Answers> = [
    {
      type: "list",
      name: "location",
      message: "I got this locations for you 💡",
      choices,
    },
  ];

  const location = await inquirer.prompt(quiestions);
  return location.id;
}
