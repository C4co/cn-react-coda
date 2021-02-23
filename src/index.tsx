import "jetbrains-mono"
import React, {useRef, useState} from "react"
import styled, {css, ThemeProvider} from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import {BiCode} from "react-icons/bi"
import {DARK, LIGHT} from "./themes"

const CodaContainer = styled.div`
  overflow: hidden;
  position: relative;

  * {
    font-family: "JetBrains Mono", monospace !important;
    background-color: none;
    font-weight: normal;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  pre {
    border: none !important;
    line-height: 1.5em;
  }

  ${(props) => css`
    background-color: ${props.theme.BACKGROUND};
    border: solid ${props.theme.BORDERS} 1px;
  `}
`

const CodaContent = styled.div`
  position: relative;
  width: 100%;
`

const CodaTitle = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 14px 8px 14px;
  font-size: 15px;

  ${(props) => css`
    color: ${props.theme.TITLE};
    border-bottom: solid ${props.theme.BORDERS} 1px;
  `}
`

const CodaCode = styled(SyntaxHighlighter)`
  border-radius: 3px !important;
  margin: 0px !important;
  position: relative;
  border: none;

  ${(props) => css`
    background-color: ${props.theme.BACKGROUND} !important;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.SCROLL_TRACK};
    }

    &::-webkit-scrollbar-thumb {
      background: ${props.theme.SCROLL_THUMB};
    }

    .react-syntax-highlighter-line-number {
      color: ${props.theme.NUMBERS};
      font-weight: normal;
      max-width: 0px !important;
      font-style: normal !important;
    }
  `}
`

const CodaIcon = styled(BiCode)`
  margin-right: 10px;
  font-size: 20px;
`

const CodaFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;

  ${(props) => css`
    border-top: solid ${props.theme.BORDERS} 1px;
  `}
`

const CodaInput = styled.textarea`
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
`

interface CodaCopyProps {
  copied: boolean
}

const CodaCopy = styled.button<CodaCopyProps>`
  border: none;
  font-weight: bold;
  border-radius: 2px;
  color: #ffffff;
  text-transform: uppercase;
  outline: none;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px 4px 12px;

  ${(props) => css`
    background: ${props.theme.INFO};
  `}

  ${(props) =>
    props.copied &&
    css`
      background-color: ${props.theme.SUCCESS};
    `}
`

interface CodaProps {
  code: string
  title?: string | boolean
  lang?: string
  theme: string
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
            <CodaTitle data-testid="coda-title">
              <CodaIcon data-testid="coda-icon" />
              {props.title}
            </CodaTitle>
          )}

          <CodaCode
            data-testid="coda-code"
            showLineNumbers
            language={props.lang}
            style={theme.SCHEME}>
            {props.code.trim()}
          </CodaCode>

          <CodaFooter data-testid="coda-footer">
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
          </CodaFooter>
        </CodaContent>
      </CodaContainer>
    </ThemeProvider>
  )
}

Coda.defaultProps = {
  lang: "jsx",
  title: false,
  theme: "dark"
}
