import MainMenuComponent from "@components/main.component";
import Pause from "@components/pause.component";
import applicationLogger from "@utils/logger.utils";

async function Main() {
  //Inicializar mi menu principal con las opciones
  let opt: number;

  do {
    const { option } = await MainMenuComponent();
    opt = option;
    console.log({ opt });
    await Pause();
  } while (opt !== 0);

  //bucle para seguir mostrando los menus hasta que quiera salir
  //no olvidar la funcion de pausa
}

Main().catch((err) => applicationLogger.log("error", err));
