import { app } from "@microsoft/teams-js";
import { createContext } from "react";

export const TeamsJsContext = createContext<{
  app?: typeof app;
}>({
  app: undefined,
});
