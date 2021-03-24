import styled, {css} from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import {BiCode} from "react-icons/bi"

type CodaContainerProps = {
  fontSize?: number
}

export const CodaContainer = styled.div<CodaContainerProps>`
  overflow: hidden;
  position: relative;

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
    border: solid ${props.theme.BORDERS} 1px;
  `}
`

export const CodaContent = styled.div`
  position: relative;
  width: 100%;
`

export const CodaTitle = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 14px 8px 14px;
  font-size: 15px;

  ${(props) => css`
    color: ${props.theme.TITLE};
    border-bottom: solid ${props.theme.BORDERS} 1px;
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

export const CodaIcon = styled(BiCode)`
  margin-right: 10px;
  font-size: 20px;
`

export const CodaFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;

  ${(props) => css`
    border-top: solid ${props.theme.BORDERS} 1px;
  `}
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
  color: white;
  font-size: 11px;
  display: flex;
  padding: 5px 12px 4px 12px;
  color: #ffffff;
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
    background: ${props.theme.INFO};
  `}
`

interface CodaCopyProps {
  copied: boolean
}

export const CodaCopy = styled.button<CodaCopyProps>`
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
