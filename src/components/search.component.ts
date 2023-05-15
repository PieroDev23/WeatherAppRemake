import inquirer, { Answers, QuestionCollection } from "inquirer";

export default async function SearchComponent() {
  const questions: QuestionCollection<Answers> = [
    {
      type: "input",
      name: "place",
      message: "Search 🔎",
    },
  ];

  const place = await inquirer.prompt(questions);
  return place;
}
