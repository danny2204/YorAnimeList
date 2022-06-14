/** @jsxImportSource @emotion/react */
import {
    AddButton,
    CollectionContainer,
    Container as ContainerTemplate,
    DeleteButton,
    PageTitle
} from '../../components/template/style';
import React, {useEffect} from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import { css } from '@emotion/react';
import {AddModals} from '../../components/modal';

export default function Collections() {
    const Container = ContainerTemplate;
    const [collections, setCollections] = React.useState([]);
    const [keys, setKeys] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    const [modalState, setModalState] = React.useState("none");

    useEffect(() => {
        if (localStorage.length == 0) {
            setCollections([...collections, "No Collection Yet"]);
        } else {
            var col = [];
            var key = [];
            for (let index = 0; index < Object.entries(localStorage).length; index++) {
                if (localStorage.key(index) != "ally-supports-cache") {
                    var value = JSON.parse(localStorage.getItem(localStorage.key(index)));
                    console.log(value)
                    if(Array.isArray(value)) {
                        key.push(localStorage.key(index));
                        col.push(value);
                    }
                }
            }
            setCollections(col);
            setKeys(key);
        }
    }, [setKeys, flag]);

    function removeCollection(collection) {
        setFlag(!flag);
        let arr = [...keys];
        arr.splice(arr.indexOf(collection), 1);
        setKeys(arr);
        var col = JSON.parse(localStorage.getItem(collection));
        col.forEach(c => {
            var anime = JSON.parse(localStorage.getItem(c.Media.id));
            anime.collections.splice(anime.collections.indexOf(collection), 1);
            localStorage.setItem(anime.Media.id, JSON.stringify(anime));
        });
        localStorage.removeItem(collection);
    }

    function closeModal() {
        setModalState("none");
    }

    function openModal() {
        setModalState("flex");
    }

    function addNewCollection(collection) {
        localStorage.setItem(collection, JSON.stringify([]));
        setFlag(!flag);
    }

    return(
        <>
            <Navbar />
            <Container>
                <div css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 3rem;
                `}>
                    <PageTitle>
                        Collections Lists
                    </PageTitle>
                    <AddButton onClick={() => openModal()}>
                        Add New Collection
                    </AddButton>
                </div>
                <hr css={css`
                    margin: 0 3rem;
                `} />
                <div css={css`
                    display: flex;
                    justify-content: center;
                `}>
                    <div css={css`
                        display: flex;
                        flex-wrap: wrap;
                        width: 82%;
                        align-items: center;
                        justify-content: space-between;
                    `}>
                        <>
                            {collections.length == 0 && <h1 css={css`
                                color: rgb(156 163 175);
                                margin-top: 3rem;
                                font-size: 
                            `}>
                                    No Collections
                                </h1>
                            }
                            {collections.length != 0 && collections?.map(function(c, index) {
                                return (
                                    <>
                                        <div css={css`
                                            margin: 1rem 0.75rem;
                                        `}>
                                            <Link href={`/collections/${keys[index]}`}>
                                                <CollectionContainer>
                                                        {c.length != 0 && 
                                                            <img css={css`
                                                                height: 5.25rem;
                                                                width: 4rem;
                                                            `} src={c[0].Media.coverImage.medium} />
                                                        }
                                                        <div css={css`
                                                            margin-left: 1rem;
                                                            display: flex;
                                                            flex-direction: column;
                                                            font-size: 1rem;
                                                        `}>
                                                            <p key={index}>
                                                                {keys[index]}
                                                            </p>
                                                        
                                                            <p css={css`
                                                                color: rgb(156 163 175)
                                                            `}>
                                                            Anime : {c.length > 0 && c[0].Media.title.romaji} 
                                                            </p>
                                                        </div>                                                        
                                                        {/* <a css={css`
                                                            color: red;
                                                            font-size: 0.75rem;
                                                            z-index: 999;
                                                        `} onClick={() => removeCollection(keys[index])}>
                                                            <svg css={css`
                                                                width: 1.5rem;
                                                                top: 0.5rem;
                                                                right: 0.5rem;
                                                            `} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </a> */}
                                                </CollectionContainer>
                                            </Link>
                                            <DeleteButton onClick={() => removeCollection(keys[index])}>Delete Collection</DeleteButton>
                                        </div>
                                    </>
                                );
                            })}
                        </>
                    </div>
                </div>
            </Container>
            <AddModals onAdd={addNewCollection} onClose={closeModal} display={modalState} />
        </>
    )
}