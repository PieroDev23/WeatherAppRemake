import { choices } from "@data/data";
import { MainMenuPrompt } from "@interfaces/app.interfaces";
import inquirer, { Answers, QuestionCollection } from "inquirer";

export default async function MainMenuComponent() {
  const questions: QuestionCollection<Answers> = [
    {
      type: "list",
      name: "option",
      message: "Choose an option ⭐",
      choices,
    },
  ];
  const answer = await inquirer.prompt<MainMenuPrompt>(questions);
  return answer.option;
}
