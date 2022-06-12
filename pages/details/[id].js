import {useRouter} from 'next/router'
import Navbar from '../../components/navbar';
import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import Tabs from '../../components/tabs';
import React, { useEffect } from 'react';

export default function Details() {
    const router = useRouter();
    const {id} = router.query;
    const [currentTab, setCurrentTab] = React.useState(1);

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
                }
                genres
                episodes
                averageScore
                trending
                characters {
                    edges {
                        node {
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

    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `;

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
        return (<p>{c.node.name.full}</p>)
    });

    var staffTab = data?.Media.staff.edges.map(function(s) {
        return (<p>{s.node.name.full}</p>)
    });

    const [children, setChildren] = React.useState(characterTab);

    useEffect(() => {
        if(currentTab == 1){
            setChildren(characterTab)
        } else {
            setChildren(staffTab)
        }
    }, [currentTab])

    function changeTab(x) {
        setCurrentTab(x)
    }

    function addToCollection(data) {
        // window.localStorage.clear()
        if (localStorage.length == 0){
            const newCollection = window.prompt("Input New Collection Name");
            var test = Object.assign({collections: [newCollection]}, data)
            localStorage.setItem(newCollection, JSON.stringify([test]));
        } else {
            console.log(Object.entries(localStorage))
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{display: "flex"}}>
                <Container>
                    <Image src={data?.Media.coverImage.large} />
                    <button onClick={() => addToCollection(data)}>Add To Collection</button>
                    <div>
                        <p>{data?.Media.title.native}</p>
                        <p>{data?.Media.title.english}</p>
                        <p>{data?.Media.episodes}</p>
                        <p>{startDate} - {endDate}</p>
                        {data?.Media.studios.edges.map(function(s) {
                            return s.node.name
                        })}
                        {data?.Media.genres.map(function(g) {
                            return g
                        })}
                    </div>
                </Container>
                <Container>
                    <div style={{dispaly: "flex", flexDirection: "column"}}>
                        <h1> {data?.Media.title.romaji} </h1>
                        <div>
                            <h5> Episodes: {data?.Media.episodes} </h5>
                            <h5> Score: {data?.Media.averageScore} </h5>
                            <h5> Trending: {data?.Media.trending} </h5>
                        </div>
                        <h5>Synopsis : </h5>
                        <p>
                            {data?.Media.description}
                        </p>
                    </div>

                    <Tabs characterTab={() => changeTab(1)} staffTab={() => changeTab(2)}>
                        {children}
                    </Tabs>
                </Container>
            </div>
        </div>
    )
}