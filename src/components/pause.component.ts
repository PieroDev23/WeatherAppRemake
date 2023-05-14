import inquirer, { Answers, QuestionCollection } from "inquirer";

export default async function Pause() {
  const questions: QuestionCollection<Answers> = [
    {
      type: "input",
      name: "pause",
      message: "press any key to continue",
    },
  ];

  await inquirer.prompt(questions);
}
