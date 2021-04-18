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
    expect(getByTestId("coda-code")).toBeInTheDocument()
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

  test("Check copy to clipboard", () => {
    Object.defineProperty(document, "execCommand", {value: jest.fn()})
    const {getByTestId} = render(
      <Coda code={Example} theme="light" lang="javascript" />
    )

    expect(getByTestId("coda-copy")).toHaveTextContent("Copy code")
    fireEvent.click(getByTestId("coda-copy"))
    expect(getByTestId("coda-copy")).toHaveTextContent("Copied!")
  })

  test("Check copy font-size buttons", () => {
    const {getByTestId} = render(<Coda code={Example} lang="javascript" />)

    expect(getByTestId("coda-fontsize-increment")).toBeInTheDocument()
    expect(getByTestId("coda-fontsize-increment")).toHaveTextContent("A+")
    expect(getByTestId("coda-fontsize-decrement")).toBeInTheDocument()
    expect(getByTestId("coda-fontsize-decrement")).toHaveTextContent("A-")
  })

  test("Check increment font-size", () => {
    const {getByTestId} = render(<Coda code={Example} lang="javascript" />)
    expect(getByTestId("coda-container")).toHaveStyleRule("font-size", "18px")
    const clicks: number[] = [1, 2, 3, 4, 5, 6]

    clicks.forEach(() => {
      fireEvent.click(getByTestId("coda-fontsize-increment"))
    })

    expect(getByTestId("coda-container")).toHaveStyleRule("font-size", "22px")
  })

  test("Check decrement font-size", () => {
    const {getByTestId} = render(<Coda code={Example} lang="javascript" />)
    expect(getByTestId("coda-container")).toHaveStyleRule("font-size", "18px")
    const clicks: number[] = [1, 2, 3, 4, 5, 6]

    clicks.forEach(() => {
      fireEvent.click(getByTestId("coda-fontsize-decrement"))
    })

    expect(getByTestId("coda-container")).toHaveStyleRule("font-size", "14px")
  })
})
