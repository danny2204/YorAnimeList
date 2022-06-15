/** @jsxImportSource @emotion/react */
import {useRouter} from 'next/router'
import Navbar from '../../components/navbar';
import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import Tabs from '../../components/tabs';
import React, { useEffect } from 'react';
import {
    AddButton,
    Container as ContainerTemplate,
    Information,
    Label,
    ListItem,
    Loader
} from '../../components/template/style';
import {css} from '@emotion/react';
import SmallInformation from '../../components/template/SmallInformation';
import {Modals} from '../../components/modal';
import Link from 'next/link';
import SnackBar from '../../components/snackbar';
import parse from 'html-react-parser';

export default function Details() {
    const router = useRouter();
    const {id} = router.query;
    const [currentTab, setCurrentTab] = React.useState(1);
    const [modalState, setModalState] = React.useState("none");
    const [detailModalState, setDetailModalState] = React.useState("none");
    const [snackBarState, setSnackBarState] = React.useState("none");

    const query = gql`
        query($id: Int) {
            Media (id: $id, type: ANIME) {
                id
                startDate {
                    year
                    month
                    day
                }
                endDate {
                    year
                    month
                    day
                }
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
                coverImage {
                    large
                    medium
                }
                type
                genres
                season
                seasonInt
                seasonYear
                episodes
                averageScore
                trending
                characters {
                    edges {
                        node {
                            id
                            name {
                                full
                            }
                            image {
                                medium
                            }
                        }
                    }
                }
                description
                staff {
                    edges {
                        node {
                            id
                            name {
                                full
                            }
                            image {
                                medium
                            }
                            primaryOccupations
                        }
                    }
                }
                studios {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
                reviews {
                    edges {
                        node {
                            id
                            summary
                            userRating
                            user {
                                name
                            }
                        }
                    }
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(query, {
        variables: {
            id: id
        }
    });

    const Image = styled.img`
        object-fit: cover;
        width: 20vw;
        height: 28vw;
    `;

    const Container = ContainerTemplate;

    var startDate = new Date(data?.Media.startDate.year, data?.Media.startDate.month, data?.Media.startDate.day);
    startDate = startDate.toLocaleString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    var endDate = new Date(data?.Media.endDate.year, data?.Media.endDate.month, data?.Media.endDate.day);
    endDate = endDate.toLocaleString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    var characterTab = data?.Media.characters.edges.map(function(c) {
        return (
            <ListItem>
                <img css={css`
                    width: 3.5rem;
                    height: 5rem;
                    border: 1px solid black;
                `} src={c.node.image.medium} />
                <p css={css`
                    margin-left: 0.75rem;
                `}>
                    {c.node.name.full}
                </p>
            </ListItem>
        )
    });

    var staffTab = data?.Media.reviews.edges.map(function(r) {
        return (
            <ListItem css={css`
                flex-direction: column;
                align-items: flex-start;
            `}>
                <p css={css`
                    margin-left: 0.75rem;
                `}>
                    <b>{r.node.user.name}</b>
                </p>
                <p css={css`
                    margin-left: 0.75rem;
                `}>
                    {r.node.summary}
                </p>
            </ListItem>
        )
    });

    const [children, setChildren] = React.useState(characterTab);

    const [collections, setCollections] = React.useState();
    const [anime, setAnime] = React.useState();

    function getAllCollections() {
        var collections = [];
        for (let index = 0; index < Object.entries(localStorage).length; index++) {
            // console.log(JSON.parse(localStorage.getItem(localStorage.key(index))))
            if (localStorage.key(index) != "ally-supports-cache") {
                var value = JSON.parse(localStorage.getItem(localStorage.key(index)));
                if(Array.isArray(value)) {
                    collections.push(localStorage.key(index));
                }
            }
        }
        return collections;
    }

    useEffect(() => {
        if(currentTab == 1){
            setChildren(characterTab)
        } else {
            setChildren(staffTab)
        }
        setCollections(getAllCollections());
        setAnime(JSON.parse(localStorage.getItem(data?.Media.id)));
    }, [data, currentTab]);

    useEffect(() => {
    }, [collections, anime])

    const [isPageOpen, setIsPageOpen] = React.useState(true);
    const [toastState, setToastState] = React.useState("");

    function changePage() {
      setIsPageOpen(!isPageOpen);
    }

    if(loading) {
        return <Loader />
    }

    function changeTab(x) {
        setCurrentTab(x)
    }

    function addAnime(collection, data) {
        if (!localStorage.getItem(data.id)) {
            var anime = Object.assign({collections: [collection]}, data)
            localStorage.setItem(data.id, JSON.stringify(anime));
        } else {
            var animeCollections = JSON.parse(localStorage.getItem(data.id));
            animeCollections.collections.push(collection);
            localStorage.setItem(data.id, JSON.stringify(animeCollections));
        }
        setCollections(getAllCollections());
        setAnime(JSON.parse(localStorage.getItem(data?.id)));
    }

    function openModal() {
        setModalState("flex");
    }

    function openDetailModal() {
        setDetailModalState("flex");
    }

    function addToCollection(name) {
        var collection = name;
        if (localStorage.getItem(collection) == null){
            localStorage.setItem(collection, JSON.stringify([data.Media]));
            addAnime(collection, data.Media);
            setToastState("success");
                setInterval(function() {
                    setToastState("")
                }, 3000);
        } else {
            var test = JSON.parse(localStorage.getItem(collection));
            if(test.indexOf(data.Media) != -1) {
                setToastState("error");
                setInterval(function() {
                    setToastState("")
                }, 3000);
            } else if(test.indexOf(data.Media) == -1) {
                test.push(data.Media);
                localStorage.setItem(collection, JSON.stringify(test));
                addAnime(collection, data.Media);
                setToastState("success");
                setInterval(function() {
                    setToastState("")
                }, 3000);
                closeModal()
            }
        }
    }

    function closeModal() {
        setModalState("none");
    }

    function closeDetailModal() {
        setDetailModalState("none");
    }

    return (
        <>
            <Navbar action={() => changePage()} />
            {isPageOpen && 
                <div>
                    <Container css={css`
                        flex-direction: row;
                        padding: 3rem;
                    `} id="mobile-container">
                        <Container id="mobile-container">
                            <h1 id="mobile-title" css={css`
                                    font-size: 1.25rem;
                                    margin-bottom: 0.75rem;
                                    display: none;
                            `}> {data?.Media.title.romaji} </h1>
                            <Image css={css`
                                width: 21.5rem;
                                height: 25rem;
                            `} src={data?.Media.coverImage.large} />
                            <AddButton id="add-to-collection" onClick={() => openModal()}>
                                <svg css={css`
                                    height: 1.25rem;
                                    width: 1.25rem;
                                    margin: 0 0.25rem;
                                `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Add To Collection</AddButton>
                            <div>
                                <Information><b>Informations</b></Information>
                                <hr></hr>
                                <Information> <b>Japanese : </b> {data?.Media.title.native}</Information>
                                <Information> <b>English : </b> {data?.Media.title.english}</Information>
                                <Information> <b>Aired : </b> {startDate} - {endDate}</Information>
                                <Information>
                                    <b>Studios : </b>
                                        {data?.Media.studios.edges.map(function(s) {
                                            return s.node.name + ", "
                                        })}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Genres : </b>
                                        {data?.Media.genres.map(function(g) {
                                            return g + ", "
                                        })}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Trending : </b> {data?.Media.trending}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Episodes : </b> {data?.Media.episodes}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Season : </b> {data?.Media.season}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Year : </b> {data?.Media.seasonYear}
                                </Information>
                                <Information className="mobile-information" css={css`display: none;`}>
                                    <b>Type : </b> {data?.Media.type}
                                </Information>
                                {anime != null && anime?.collections.length != 0 &&
                                    <Information className="mobile-information" css={css`display: none;`}>
                                        <b>Collections : </b>
                                        <a onClick={() => openDetailModal()}>Show Collections</a>
                                    </Information>
                                }
                            </div>
                        </Container>
                        <Container id="mobile-container" css={css`
                            margin-left: 2rem;
                        `}>
                            <Container id="mobile-container"  css={css`
                                margin-bottom: 1rem;
                            `}>
                                <h1 id="desktop-title" css={css`
                                    font-size: 2rem;
                                `}> {data?.Media.title.romaji} </h1>
                                <div id="genre-container" css={css`
                                    display: flex;
                                    flex-wrap: wrap;
                                `}>
                                    {data?.Media.genres.map(function(g) {
                                        return <Label>{g}</Label>
                                    })}
                                </div>

                                <div className='desktop-information' css={css`
                                    display: flex;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    background-color: #e5e7eb;
                                    padding: 1rem 0;
                                    margin: 1rem 0;
                                `}>
                                    <SmallInformation label={"Score"} content={data?.Media.averageScore} threshold={"/100"} />
                                    <div css={css`
                                        height: 5rem;
                                        border-left: 1px solid black;
                                    `} />
                                    <SmallInformation label={"Trending"} content={data?.Media.trending} />
                                    <SmallInformation label={"Episodes"} content={data?.Media.episodes} />
                                    <SmallInformation label={"Season"} content={data?.Media.season} />
                                    <SmallInformation label={"Year"} content={data?.Media.seasonYear} />
                                    <SmallInformation label={"Type"} content={data?.Media.type} />
                                </div>

                                <div className='mobile-information' css={css`
                                    display: none;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    background-color: #e5e7eb;
                                    padding: 0 0 1rem 0;
                                    margin: 1rem 0;
                                    width: 100%;
                                `}>
                                    <div css={css`
                                        width: 100%;
                                        background-color: rgb(66, 120, 245);
                                        text-align: center;
                                        color: white;
                                        font-size: 1rem;
                                        padding: 0.25rem 0;
                                    `}>
                                        Score
                                    </div>
                                    <div css={css`
                                        display: flex;
                                        align-items: flex-end;
                                        justify-content: center;
                                    `}>
                                        <h1 css={css`
                                            font-size: 2rem;
                                        `}> {data?.Media.averageScore} </h1> /100
                                    </div>
                                </div>
                                
                                {anime && anime?.collections.length != 0 && 
                                    <div className="desktop-information">
                                        <h1 css={css`
                                            font-size: 1.5rem;
                                        `}>Collections : </h1>
                                        <hr css={css`
                                            margin: 0.5rem 0;
                                        `}/>
                                        <div css={css`
                                            display: flex;
                                            flex-wrap: wrap;
                                        `}>
                                            {anime?.collections.map((c) => {
                                                return <Link href={`/collections/${c}`}>
                                                    <Label css={css`
                                                        &:hover {
                                                            background-color: #4338ca;
                                                            cursor: pointer;
                                                        }
                                                    `}>{c}</Label>
                                                </Link>
                                            })}
                                        </div> 
                                    </div>
                                }

                                <h1 css={css`
                                    font-size: 1.5rem;
                                `}>Synopsis : </h1>
                                <hr css={css`
                                    margin: 0.5rem 0;
                                `}/>
                                <p>
                                    {parse(data?.Media.description)}
                                </p>
                            </Container>

                            <Tabs characterTab={() => changeTab(1)} staffTab={() => changeTab(2)}>
                                {children}
                            </Tabs>
                        </Container>
                        <Modals title="Collections" buttonDisplay="none" addToCollection={addToCollection} onClose={closeDetailModal} display={detailModalState} data={collections} />
                        <Modals title="Add To Collections" buttonDisplay="flex" addToCollection={addToCollection} onClose={closeModal} display={modalState} data={collections} />
                        <SnackBar type={toastState} failedContent="Failed To Add New Collection" successContent="Successfully Add New Collection" />
                    </Container>
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
        </>
    )
}