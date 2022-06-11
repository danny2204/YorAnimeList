import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import Navbar from '../components/navbar/index'
import Card from '../components/card/index'
import React, { useEffect } from 'react'
import Pagination from '../components/pagination'
import { gql, useLazyQuery } from '@apollo/client'

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
    if (loading) {
      return "Loading . . ."
    }
  }, [pages]);

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

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
      <Container>
          {data == null ? "" : data.Page.media.map(function(d, idx) {
            return (<Card key={idx}
              season={d.seasonInt} episode={d.episodes}
              title={d.title.romaji} image={d.coverImage.large}
              id={d.id}>{d.title.romaji}</Card>)
          })}
      </Container>

      <Pagination currentPage={pages} previous={() => previous()} goTo={goTo} next={() => next()} />
    </div>
  )
}
