import styled, {css} from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import {BiCode} from "react-icons/bi"

type CodaContainerProps = {
  fontSize?: number
}

export const CodaHeader = styled.div`
  width: 100%;
  padding: 5px !important;
`

export const CodaContainer = styled.div<CodaContainerProps>`
  overflow: hidden;
  position: relative;
  padding: 8px;

  * {
    font-family: "JetBrains Mono", monospace !important;
    background-color: none;
    font-weight: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  pre {
    border: none !important;
    line-height: 1.5em;
  }

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  ${(props) => css`
    background-color: ${props.theme.BACKGROUND};
  `}
`

export const CodaContent = styled.div`
  position: relative;
  width: 100%;
`

export const CodaTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 15px;

  ${(props) => css`
    color: ${props.theme.TITLE};
  `}
`

export const CodaCode = styled(SyntaxHighlighter)`
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
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props.theme.SCROLL_THUMB};
      border-radius: 20px;
    }

    .react-syntax-highlighter-line-number {
      color: ${props.theme.NUMBERS};
      font-weight: normal;
      max-width: 0px !important;
      font-style: normal !important;
    }
  `}
`

export const CodaIcon = styled(BiCode)`
  margin-right: 10px;
  font-size: 20px;
`

export const CodaControls = styled.footer`
  display: flex;
`

export const CodaInput = styled.textarea`
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
`

export const CodaFontSize = styled.button`
  font-size: 11px;
  display: flex;
  padding: 5px 12px 4px 12px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-weight: bold;
  margin-right: 5px;
  position: relative;

  &:active {
    top: -2px;
  }

  ${(props) => css`
    background: ${props.theme.BUTTON};
    color: ${props.theme.BUTTON_TEXT};
  `}
`

interface CodaCopyProps {
  copied: boolean
}

export const CodaCopy = styled.button<CodaCopyProps>`
  border: none;
  font-weight: bold;
  border-radius: 2px;
  text-transform: uppercase;
  outline: none;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px 4px 12px;

  ${(props) => css`
    background: ${props.theme.BUTTON};
    color: ${props.theme.BUTTON_TEXT};
  `}

  ${(props) =>
    props.copied &&
    css`
      background-color: ${props.theme.BUTTON_SUCCESS};
      color: ${props.theme.BUTTON_SUCCESS_TEXT};
    `}
`
