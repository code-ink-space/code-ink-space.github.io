import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import SEO from './SEO'
import theme from '../../config/theme'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
    border-bottom: 2px solid #042A2B;
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  a.abutton {
    border-bottom: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    font-family: ${props => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
  ul {
    list-style-type: square;
  }
  li {
    line-height: 3;
  }
  article p {
    line-height: 3;
  }
  .image-caption {
    font-style: italic;
    display: inherit;
    text-align: center;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`

const Layout = ({ children, customSEO }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "YYYY-MM-DD")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {!customSEO && <SEO buildTime={data.site.buildTime} />}
          <GlobalStyle />
          {children}
          <Footer>
            <small>code anything tech . ink a quote from a book . space for a memorable photo</small>
            <br /><br />

            new issues published every Sunday <br /><br />

            <strong>the chronicles of <a href="https://code-ink-space.gitlab.io/code">code</a> and <a href="https://code-ink-space.gitlab.io/ink">ink</a> in <a href="https://code-ink-space.gitlab.io/space">space</a></strong> <br />
            &copy; 2019 by Patrick. All rights reserved. <br />
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
