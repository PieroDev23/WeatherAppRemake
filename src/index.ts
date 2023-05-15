import "dotenv/config";
import MainMenuComponent from "@components/main.component";
import Pause from "@components/pause.component";
import MenuStrategies from "@helpers/strategy.helper";
import applicationLogger from "@utils/logger.utils";

async function Main() {
  let opt: number;
  do {
    opt = await MainMenuComponent();
    const displayPrompt = MenuStrategies[opt];
    await displayPrompt();
    await Pause();
  } while (opt !== 0);
}

Main().catch((err) => applicationLogger.log("error", err));
