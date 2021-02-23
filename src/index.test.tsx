import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import {render, fireEvent} from "@testing-library/react"
import React from "react"
import {Coda} from "./index"
import {DARK, LIGHT} from "./themes"

const Example = `
  function fn(){
    console.log("Hello world!")
  }
`

describe("<Coda/> component", () => {
  test("Check initial render", () => {
    const {getByTestId} = render(
      <Coda code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-container")).toBeInTheDocument()
    expect(getByTestId("coda-content")).toBeInTheDocument()
    expect(getByTestId("coda-code")).toBeInTheDocument()
    expect(getByTestId("coda-footer")).toBeInTheDocument()
    expect(getByTestId("coda-input")).toBeInTheDocument()
    expect(getByTestId("coda-copy")).toBeInTheDocument()
  })

  test("Check title", () => {
    const {getByTestId} = render(
      <Coda title="example.js" code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-title")).toBeInTheDocument()
    expect(getByTestId("coda-title")).toHaveTextContent("example.js")
  })

  test("Check default theme", () => {
    const {getByTestId} = render(
      <Coda code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-container")).toHaveStyleRule(
      "background-color",
      DARK.BACKGROUND
    )
    expect(getByTestId("coda-container")).toHaveStyleRule(
      "border",
      `solid ${DARK.BORDERS} 1px`
    )
  })

  test("Check light theme", () => {
    const {getByTestId} = render(
      <Coda code={Example} theme="light" lang="javascript" />
    )

    expect(getByTestId("coda-container")).toHaveStyleRule(
      "background-color",
      LIGHT.BACKGROUND
    )
    expect(getByTestId("coda-container")).toHaveStyleRule(
      "border",
      `solid ${LIGHT.BORDERS} 1px`
    )
  })

  test("Check dark theme", () => {
    const {getByTestId} = render(
      <Coda code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-container")).toHaveStyleRule(
      "background-color",
      DARK.BACKGROUND
    )
    expect(getByTestId("coda-container")).toHaveStyleRule(
      "border",
      `solid ${DARK.BORDERS} 1px`
    )
  })

  test("Check copy to clipboard", () => {
    Object.defineProperty(document, "execCommand", {value: jest.fn()})
    const {getByTestId} = render(
      <Coda code={Example} theme="light" lang="javascript" />
    )

    expect(getByTestId("coda-copy")).toHaveTextContent("Copy code")
    fireEvent.click(getByTestId("coda-copy"))
    expect(getByTestId("coda-copy")).toHaveTextContent("Copied!")
  })
})