import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Subline from './Subline'

const Title = styled.p`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
    border-bottom: 2px solid #042A2B;
  }
`

const IssueLink = ({ title, date, slug, issue }) => {
  return (
      <Title>
        <Link to={slug}>{title}</Link> (Issue #{issue})
      </Title>
  )
}

export default IssueLink

IssueLink.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
}
