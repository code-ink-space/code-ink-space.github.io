import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Subline from './Subline'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  padding-bottom: 3.5rem;
  border-bottom 1px solid rgba(0,0,0,0.25);

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom 1px solid rgba(0,0,0,0.25);
  }
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
    border-bottom: none;
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const PostContent = styled.div`
`

const Article = ({ title, date, body, excerpt, slug, timeToRead, categories, issue }) => {
  const firstChar = title.charAt(0)

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; <b>Issue #{issue}</b> in{' '}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ', '}
            <Link to={`/volumes/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <PostContent>
            <MDXRenderer>{body}</MDXRenderer>
      </PostContent>
    </Post>
  )
}

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  issue: PropTypes.string.isRequired,
}
