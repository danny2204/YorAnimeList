/** @jsxImportSource @emotion/react */
import {
    Container as ContainerTemplate, PageTitle
} from "../../components/template/style"
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from "../../components/template/layout";
import Navbar from "../../components/navbar";
import {css} from "@emotion/react";

export default function CollectionDetails() {
    const router = useRouter();
    const { key } = router.query;
    const Container = ContainerTemplate;
    const [collection, setCollection] = React.useState([]);
    const [flag, setFlag] = React.useState(false);

    useEffect(() => {
        setCollection(JSON.parse(localStorage.getItem(key)));
    }, [key, flag]);

    function removeFromCollection(id) {
        var anime = JSON.parse(localStorage.getItem(id));
        anime.collections.splice(anime.collections.indexOf(key), 1);
        localStorage.setItem(id, JSON.stringify(anime));
        var collections = JSON.parse(localStorage.getItem(key));
        collections.splice(collections.indexOf(collections.filter(col => {
            return col.Media.id == id;
        }, 1)));
        localStorage.setItem(key, JSON.stringify(collections));
        setFlag(!flag);
    }

    return (
        <>
            <Navbar />
            <PageTitle>
                Collections Detail
            </PageTitle>
            <hr css={css`
                margin: 0 3rem;
            `} />
            <Container>
                <Layout data={collection} isPage={false} action={removeFromCollection} />
            </Container>
        </>
    )
}