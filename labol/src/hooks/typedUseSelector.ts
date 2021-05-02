import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

export const useTypedSeceltorHook: TypedUseSelectorHook<RootState> = useSelector;