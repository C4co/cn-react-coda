import {vs, nightOwl} from "react-syntax-highlighter/dist/esm/styles/hljs"
import {lighten, darken} from "polished"

export const DARK = {
  BACKGROUND: "#22223A",
  BORDERS: lighten(0.08, "#22223A"),
  NUMBERS: lighten(0.3, "#22223A"),
  TITLE: lighten(0.5, "#22223A"),
  SCROLL_TRACK: lighten(0.1, "#22223A"),
  SCROLL_THUMB: lighten(0.2, "#22223A"),
  INFO: "#0066ff",
  SUCCESS: "#00b057",
  SCHEME: nightOwl
}

export const LIGHT = {
  BACKGROUND: "#FFFFFF",
  BORDERS: darken(0.1, "#FFFFFF"),
  NUMBERS: darken(0.5, "#FFFFFF"),
  TITLE: darken(0.7, "#FFFFFF"),
  SCROLL_TRACK: darken(0.1, "#FFFFFF"),
  SCROLL_THUMB: darken(0.15, "#FFFFFF"),
  INFO: "#0066ff",
  SUCCESS: "#00b057",
  SCHEME: vs
}
