import {
    Container as ContainerTemplate
} from "../../components/template/style"
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from "../../components/template/layout";

export default function CollectionDetails() {
    const router = useRouter();
    const { key } = router.query;
    const Container = ContainerTemplate;
    const [collection, setCollection] = React.useState([]);

    useEffect(() => {
        setCollection(JSON.parse(localStorage.getItem(key)));
    }, [key]);

    function removeFromCollection(id) {
        var anime = JSON.parse(localStorage.getItem(id));
        anime.collections.splice(anime.collections.indexOf(key), 1);
        localStorage.setItem(id, JSON.stringify(anime));
        console.log(anime)
        var collections = JSON.parse(localStorage.getItem(key));
        collections.splice(collections.indexOf(collections.filter(col => {
            return col.Media.id == id;
        }, 1)));
        localStorage.setItem(key, JSON.stringify(collections));
    }

    return (
        <Container>
            <Layout data={collection} isPage={false} action={removeFromCollection} />
        </Container>
    )
}