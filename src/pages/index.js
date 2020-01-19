import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'
import IssueLink from '../components/IssueLink.js'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 1rem 2rem 3rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
  p.sitedesc {
    font-size: 1.43rem;
    font-style: italic;
  }
`

const IndexPage = ({
  data: {
    latest: { edges: postNode },
    past: { edges: pastNode },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>the chronicles of<br />code and ink<br />in space</h1>
        <p class="sitedesc">notes on tech, books and photography by a lifelong learner</p>
        <p>
          <small><small><small>
            (an offshoot of <a href="https://i.hopeph.com">i blast code and ink into space</a>)
          </small></small></small>
        </p>
      </Hero>
      <Content>
        <SectionTitle>Latest Issue</SectionTitle>
        {postNode.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            body={post.node.code.body}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
            issue={post.node.frontmatter.issue}
          />
        ))}
        <SectionTitle>Past Issues</SectionTitle>
        <p align="center">
        {pastNode.map(post => (
          <IssueLink
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            slug={post.node.fields.slug}
            key={post.node.fields.slug}
            issue={post.node.frontmatter.issue}
          />
        ))}
        </p>
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape(
  {
    latest: PropTypes.shape(
    {
      allMdx: PropTypes.shape({
        edges: PropTypes.array.isRequired,
      }),
    }).isRequired,
    past: PropTypes.shape(
    {
      allMdx: PropTypes.shape({
        edges: PropTypes.array.isRequired,
      }),
    }).isRequired,
  }
  ).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    latest: allMdx(limit: 1, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {draft: {ne: 1}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do")
            categories
            issue
          }
          excerpt(pruneLength: 200)
          timeToRead
          code {
            body
          }
        }
      }
    }
    past: allMdx(skip: 1, limit: 4, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {draft: {ne: 1}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do")
            categories
            issue
          }
          excerpt(pruneLength: 200)
          timeToRead
          code {
            body
          }
        }
      }
    }
  }
`
