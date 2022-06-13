import Navbar from '../components/navbar/index'
import React, { useEffect } from 'react'
import Pagination from '../components/pagination'
import { gql, useLazyQuery } from '@apollo/client'
import Layout from '../components/template/layout'
import { css } from '@emotion/react'
import { Container } from '../components/template/style'

export default function Home() {
  const [pages, setPage] = React.useState(1);

  const query = gql`
    query($page: Int, $perPage: Int) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (type: ANIME) {
          id
          seasonInt
          episodes
          coverImage {
            large
            medium
          }
          title {
            romaji
          }
        }
      }
    }
  `;

  const [getData, {loading, error, data}] = useLazyQuery(query, {
    variables: {
      page: pages,
      perPage: 10
    }
  });

  useEffect(() => {
    getData()
  }, [pages]);

  function previous() {
    setPage(pages - 1);
  }

  function next() {
    setPage(pages + 1);
  }

  function goTo(x) {
    setPage(x);
  }
  
  return (
    <div>
      <Navbar />
      <Container css={css`
        align-items: center
      `}>
        <Layout isPage={true} data={data} />
        <Pagination pages={data?.Page.pageInfo.lastPage} currentPage={pages} previous={() => previous()} goTo={goTo} next={() => next()} />
      </Container>
    </div>
  )
}
