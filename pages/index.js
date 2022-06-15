/** @jsxImportSource @emotion/react */
import Navbar from '../components/navbar/index'
import React, { useEffect } from 'react'
import Pagination from '../components/pagination'
import { gql, useLazyQuery } from '@apollo/client'
import Layout from '../components/template/layout'
import { css } from '@emotion/react'
import { Container, ListItem, Loader, PageTitle } from '../components/template/style'
import Header from '../components/page/header'
import Link from 'next/link'

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

  const [isPageOpen, setIsPageOpen] = React.useState(true);

  function changePage() {
    setIsPageOpen(!isPageOpen);
  }

  if(loading) {
    return <Loader />
  }
  
  return (
    <div>
      <Navbar action={() => changePage()} />
      {isPageOpen && 
        <div>
          <Header title={"Anime Lists"} />
          <Container css={css`
            align-items: center;
          `}>
            <Layout isPage={true} data={data} />
          </Container>
          <Pagination pages={data?.Page.pageInfo.lastPage} currentPage={pages} previous={() => previous()} goTo={goTo} next={() => next()} />
        </div>
      }
      {!isPageOpen &&
        <div>
            <Link href="/">
                <ListItem css={css`
                    padding-left: 2rem;
                `}>
                    Home
                </ListItem>
            </Link>
            <Link href="/collections">
                <ListItem css={css`
                    padding-left: 2rem;
                `}>
                    Collections
                </ListItem>
            </Link>
        </div>
      }
    </div>
  )
}
