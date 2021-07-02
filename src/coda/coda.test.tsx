import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import {render, fireEvent} from "@testing-library/react"
import React from "react"
import {Coda} from "./coda"
import {DARK, LIGHT} from "../themes"

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
  })

  test("Check title", () => {
    const {getByTestId} = render(
      <Coda title="example.js" code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-header")).toBeInTheDocument()
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
  })

  test("Check light theme", () => {
    const {getByTestId} = render(
      <Coda code={Example} theme="light" lang="javascript" />
    )

    expect(getByTestId("coda-container")).toHaveStyleRule(
      "background-color",
      LIGHT.BACKGROUND
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
  })

  test("Check controls", () => {
    const {getByTestId} = render(
      <Coda controls code={Example} theme="dark" lang="javascript" />
    )

    expect(getByTestId("coda-controls")).toBeInTheDocument()
    expect(getByTestId("coda-input")).toBeInTheDocument()
  })

  test("Check copy to clipboard", () => {
    Object.defineProperty(document, "execCommand", {value: jest.fn()})

    const {getByTestId} = render(
      <Coda controls code={Example} theme="light" lang="javascript" />
    )

    expect(getByTestId("coda-copy")).toHaveTextContent("Copy code")
    fireEvent.click(getByTestId("coda-copy"))
    expect(getByTestId("coda-copy")).toHaveTextContent("Copied!")
  })
})
