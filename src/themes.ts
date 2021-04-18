import {vs, nightOwl} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import {lighten, darken} from "polished"

export const DARK = {
  BACKGROUND: "#22223A",
  BORDERS: lighten(0.08, "#22223A"),
  NUMBERS: lighten(0.3, "#22223A"),
  TITLE: lighten(0.5, "#22223A"),
  SCROLL_TRACK: lighten(0.1, "#22223A"),
  SCROLL_THUMB: lighten(0.17, "#22223A"),
  BUTTON: "#323255",
  BUTTON_TEXT: lighten(0.5, "#22223A"),
  BUTTON_SUCCESS: "#00b057",
  BUTTON_SUCCESS_TEXT: "#ffffff",
  SCHEME: nightOwl
}

export const LIGHT = {
  BACKGROUND: "#FFFFFF",
  BORDERS: darken(0.1, "#FFFFFF"),
  NUMBERS: darken(0.5, "#FFFFFF"),
  TITLE: darken(0.7, "#FFFFFF"),
  SCROLL_TRACK: darken(0.1, "#FFFFFF"),
  SCROLL_THUMB: darken(0.2, "#FFFFFF"),
  BUTTON: "#0099cc",
  BUTTON_TEXT: "#FFFFFF",
  BUTTON_SUCCESS: "#00b057",
  BUTTON_SUCCESS_TEXT: "#ffffff",
  SCHEME: vs
}
