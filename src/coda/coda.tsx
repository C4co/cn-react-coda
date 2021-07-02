import React, {useRef, useState} from "react"
import {ThemeProvider} from "styled-components"
import {DARK, LIGHT} from "../themes"
import {
  CodaCode,
  CodaContainer,
  CodaContent,
  CodaCopy,
  CodaControls,
  CodaInput,
  CodaTitle,
  CodaHeader
} from "./coda.style"

interface CodaProps {
  code: string
  title?: string | boolean
  lang?: string
  theme: string
  showLineNumbers: boolean
}

export function Coda(props: CodaProps) {
  const input = useRef<HTMLTextAreaElement>(null)
  const [copied, setCopied] = useState(false)

  let theme = DARK

  if (props.theme === "light") {
    theme = LIGHT
  }

  if (props.theme === "dark") {
    theme = DARK
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
      <CodaContainer data-testid="coda-container">
        <CodaContent data-testid="coda-content">

          {props.title && (
            <CodaHeader data-testid="coda-header">
              <CodaTitle data-testid="coda-title">
                {props.title}
              </CodaTitle>
            </CodaHeader>
          )}

          {/* Content */}

          <CodaCode
            data-testid="coda-code"
            showLineNumbers={props.showLineNumbers}
            language={props.lang}
            style={theme.SCHEME}>
            {props.code.trim()}
          </CodaCode>

        </CodaContent>

        {/* Controls */}

        <CodaControls className="coda__controls" data-testid="coda-controls">
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

      </CodaContainer>
    </ThemeProvider>
  )
}

Coda.defaultProps = {
  code: "",
  lang: "jsx",
  controls: false,
  title: false,
  theme: "dark",
  showLineNumbers: false
}
