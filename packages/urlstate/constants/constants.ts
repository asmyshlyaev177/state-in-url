import { isSafari } from "../utils";

export const SYMBOLS = {
  date: "⏲",
  undefined: "∙undefined",
} as const;

export const TIMEOUT = isSafari ? 330 : 70;
