import "jetbrains-mono"
import React, {useRef, useState} from "react"
import {ThemeProvider} from "styled-components"
import {DARK, LIGHT} from "../themes"
import {
  CodaCode,
  CodaContainer,
  CodaContent,
  CodaCopy,
  CodaFontSize,
  CodaControls,
  CodaIcon,
  CodaInput,
  CodaTitle,
  CodaHeader
} from "./coda.style"

interface CodaProps {
  code: string
  controls?: boolean
  title?: string | boolean
  lang?: string
  theme: string
}

export function Coda(props: CodaProps) {
  const input = useRef<HTMLTextAreaElement>(null)
  const [copied, setCopied] = useState(false)
  const [fontSize, setFontSize] = useState(18)

  let theme = DARK

  if (props.theme === "light") {
    theme = LIGHT
  }

  if (props.theme === "dark") {
    theme = DARK
  }

  function IncrementFontSize() {
    if (fontSize < 22) {
      setFontSize(fontSize + 1)
    }
  }

  function DecrementFontSize() {
    if (fontSize > 14) {
      setFontSize(fontSize - 1)
    }
  }

  function copyToClipboard() {
    input.current?.select() //eslint-disable-line
    document.execCommand("copy")
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <ThemeProvider theme={theme}>
      <CodaContainer fontSize={fontSize} data-testid="coda-container">
        <CodaContent data-testid="coda-content">
          <CodaHeader>
            {/* Title */}

            {props.title && (
              <CodaTitle data-testid="coda-title">
                <CodaIcon data-testid="coda-icon" />
                {props.title}
              </CodaTitle>
            )}

            {/* Bar */}

            {props.controls && (
              <CodaControls data-testid="coda-controls">
                <CodaFontSize
                  data-testid="coda-fontsize-decrement"
                  onClick={DecrementFontSize}>
                  A-
                </CodaFontSize>

                <CodaFontSize
                  data-testid="coda-fontsize-increment"
                  onClick={IncrementFontSize}>
                  A+
                </CodaFontSize>

                <CodaInput
                  data-testid="coda-input"
                  readOnly
                  ref={input}
                  value={props.code.trim()}
                />

                <CodaCopy
                  data-testid="coda-copy"
                  copied={copied}
                  onClick={copyToClipboard}>
                  {copied ? "Copied!" : "Copy code"}
                </CodaCopy>
              </CodaControls>
            )}
          </CodaHeader>

          {/* Content */}

          <CodaCode
            data-testid="coda-code"
            showLineNumbers
            language={props.lang}
            style={theme.SCHEME}>
            {props.code.trim()}
          </CodaCode>
        </CodaContent>
      </CodaContainer>
    </ThemeProvider>
  )
}

Coda.defaultProps = {
  lang: "jsx",
  controls: false,
  title: false,
  theme: "dark"
}
