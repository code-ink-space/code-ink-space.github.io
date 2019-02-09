import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  grid-column: 1 / -1;
  margin-left: 0;
  margin-right: 0;
  padding: 2rem 0 0 0;;
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    <Content>
      {next && (
        <Next>
          <span>Previous Issue</span><br/>
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </Next>
      )}

      {prev && (
        <Prev>
          <span>Next Issue</span><br/>
          <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
        </Prev>
      )}
    </Content>
  </Wrapper>
)

export default PrevNext

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

PrevNext.defaultProps = {
  next: null,
  prev: null,
}
