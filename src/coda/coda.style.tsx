import styled, {css} from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

type CodaContainerProps = {
  fontSize?: number
}

export const CodaHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 8px 8px 8px 8px !important;
  justify-content: space-between;

  ${(props) => css`
    border-bottom: ${props.theme.BORDER} solid 1px;
  `}
`

export const CodaContainer = styled.div<CodaContainerProps>`
  overflow: hidden;
  position: relative;
  padding: 6px 14px;
  text-align: left;
  border-radius: 3px;

  * {
    background-color: none;
    font-weight: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  pre {
    border: none !important;
    line-height: 1.5em;
    font-size: 18px;
    font-family: "Courier Prime", monospace;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  ${(props) => css`
    background-color: ${props.theme.BACKGROUND};
  `}

  &:hover {
    .coda__controls {
      display: flex;
    }
  }
`

export const CodaContent = styled.div`
  width: 100%;
`

export const CodaTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;

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

export const CodaControls = styled.footer`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
  padding: 3px;
  gap: 3px;
  display: none;
  background: black;
`

export const CodaInput = styled.textarea`
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

export const CodaCopy = styled.button<CodaCopyProps>`
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  font-size: 11px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px 5px 10px;

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
