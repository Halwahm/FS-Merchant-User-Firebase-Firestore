import { createContext, Dispatch, SetStateAction } from "react";
import { ICurrentDeal } from "./types";

interface IUpdateContext {
  currentDeal: ICurrentDeal;
  selectDeal: Dispatch<SetStateAction<ICurrentDeal>>;
}

export const UpdateDealContext = createContext<IUpdateContext>({
  currentDeal: {
    id: "",
    initialValues: {
      title: "", description: ""
    },
  },
  selectDeal: () => { },
});
