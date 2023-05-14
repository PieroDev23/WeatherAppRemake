import { ListChoiceOptions } from "inquirer";
import chalk from "chalk";

export const choices: Array<ListChoiceOptions> = [
  {
    value: 1,
    name: `${chalk.greenBright("1.")} 🌆 Search city.`,
  },
  {
    value: 2,
    name: `${chalk.greenBright("2.")} 📃 Watch your history.`,
  },
  {
    value: 0,
    name: `${chalk.greenBright("3.")} 🙋‍♂️ Exit.`,
  },
];
