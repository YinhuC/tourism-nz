import { createContext } from "react";

export const CursorContext = createContext({
  type: "default",
  setType: () => {},
});
