import {useRouter} from 'next/router'
import Navbar from '../../components/navbar';
import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'

export default function Details() {
    const router = useRouter();
    const {id} = router.query;

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

    if(loading) {
        return "asdasd";
    }

    const Image = styled.img`
        object-fit: cover;
        width: 20vw;
        height: 28vw;
    `;

    const Container = styled.div`
        display: flex;
    `;

    return (
        <div>
            <Navbar />
            <Container>
                <Image src={data?.Media.coverImage.large} />
                <div style={{dispaly: "flex", flexDirection: "column"}}>
                    <h1> {data?.Media.title.romaji} </h1>
                    <div>
                        <h5> Episodes: {data?.Media.episodes} </h5>
                        <h5> Score: {data?.Media.averageScore} </h5>
                        <h5> Trending: {data?.Media.trending} </h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}