import React, { useState } from "react"
import { Coda } from "cn-react-coda"
import styled, { css, ThemeProvider } from "styled-components"
import LOGO_LIGHT from "./assets/logo-light.svg"
import LOGO_DARK from "./assets/logo-dark.svg"
import { USAGE, HTML_XML, CSS, JAVASCRIPT, RUBY, PHP, C_PLUS_PLUS } from "./examples"
import { BiCheck } from "react-icons/bi"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  ${props => css`
    background: ${props.theme.BACKGROUND};
  `}
`

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 50px 20px 50px 20px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 3.4em;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 300;

  ${props => css`
    color: ${props.theme.TEXT};
  `}
`

const Description = styled.span`
  width: 100%;
  display: block;
  text-align: center;

  ${props => css`
    color: ${props.theme.TEXT};
  `}
`

const Install = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 1.3em;

  ${props => css`
    color: ${props.theme.INFO};
  `}
`

const BigTitle = styled.h1`
  font-size: 1.7em;
  font-weight: normal;
  width: 100%;
  text-align: center;

  ${props => css`
    color: ${props.theme.TITLE};
  `}
`

const Feature = styled.div`
  display: flex;
  padding: 12px;
  margin-bottom: 5px;
  align-items: center;

  ${props => css`
    color: ${props.theme.TEXT};
    background-color: ${props.theme.FEATURE};
  `}
`

const FeatureIcon = styled(BiCheck)`
  font-size: 20px;
  margin-right: 10px;

  ${props => css`
    color: ${props.theme.SUCCESS};
  `}
`

const ChangeTheme = styled.div`
  width: 175px;
  height: 40px;
  margin: 0 auto;
  border-radius: 100px;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  z-index: 999;

  ${props => css`
    background: ${props.theme.CHANGE};
    color: ${props.theme.BACKGROUND};
  `}
`

const ChangeThemeIcon = styled.span`
  font-size: 1.4em;
  margin-right: 10px;
`

const dark = {
  THEME: "dark",
  BACKGROUND: "#1c1c30",
  TEXT: "#9292c6",
  INFO: "#33acff",
  FEATURE: "#262641",
  SUCCESS: "#00cc66",
  TITLE: "#ffffff",
  CODA_THEME: "dark",
  LOGO: LOGO_DARK,
  CHANGE: "#f1f1f1",
  CHANGE_ICON: "🌞",
  CHANGE_TEXT: "Ligth theme"
}

const light = {
  THEME: "light",
  BACKGROUND: "#eeeeee",
  TEXT: "#3a3a3a",
  INFO: "#0033ff",
  FEATURE: "#ffffff",
  SUCCESS: "#009933",
  TITLE: "#111111",
  CODA_THEME: "light",
  LOGO: LOGO_LIGHT,
  CHANGE: "#1c1c30",
  CHANGE_ICON: "🎃",
  CHANGE_TEXT: "Dark theme"
}

export default function App(){
  const [ theme, setTheme ] = useState(dark)

  function onThemeChange(){
    if(theme.THEME === "light"){
      setTheme(dark)
    }

    if(theme.THEME === "dark"){
      setTheme(light)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Content>

          <Title> CODA </Title>

          <Description>
            A simple react component to write code snipets
          </Description>

          <Install>
            npm install cn-react-coda
          </Install>

          <br/>
          <br/>

          <ChangeTheme onClick={onThemeChange} >
            <ChangeThemeIcon>
              { theme.CHANGE_ICON }
            </ChangeThemeIcon>

            { theme.CHANGE_TEXT }
          </ChangeTheme>

          <br/>
          <br/>

          <Feature>
            <FeatureIcon/> Copy code to clipboard with one click
          </Feature>

          <Feature>
            <FeatureIcon/> Support 191 languages (highlight.js)
          </Feature>

          <Feature>
            <FeatureIcon/> Responsive
          </Feature>

          <Feature>
            <FeatureIcon/> Light and dark theme
          </Feature>

          <br/><br/>

          <BigTitle> How to use? </BigTitle>

          <br/>

          <Coda lang="html" theme={theme.CODA_THEME} title="usage.tsx" code={USAGE} />

          <br/><br/>

          <BigTitle> Support 191 languages </BigTitle>

          <br/>

          <Description>
            Check some examples
          </Description>

          <br/>

          <Coda controls={true} lang="html" theme={theme.CODA_THEME} title="example.html" code={HTML_XML} />
          <br/>
          <Coda controls={true} lang="css" theme={theme.CODA_THEME} title="example.css" code={CSS} />
          <br/>
          <Coda controls={true} lang="javascript" theme={theme.CODA_THEME} title="example.js" code={JAVASCRIPT} />
          <br/>
          <Coda controls={true} lang="ruby" theme={theme.CODA_THEME} title="example.rb" code={RUBY} />
          <br/>
          <Coda controls={true} lang="php" theme={theme.CODA_THEME} title="example.php" code={PHP} />
          <br/>
          <Coda controls={true} lang="c++" theme={theme.CODA_THEME} title="example.cpp" code={C_PLUS_PLUS} />
        </Content>
      </Container>
    </ThemeProvider>
  )
}
