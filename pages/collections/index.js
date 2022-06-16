/** @jsxImportSource @emotion/react */
import {
    AddButton,
    CollectionContainer,
    Container as ContainerTemplate,
    DeleteButton,
    ListItem,
    PageTitle,
    UpdateButton
} from '../../components/template/style';
import React, {useEffect} from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import { css } from '@emotion/react';
import {AddModals, ConfirmationModal, EditModals} from '../../components/modal';
import Header from '../../components/page/header';
import SnackBar from '../../components/snackbar';

export default function Collections() {
    const Container = ContainerTemplate;
    const [collections, setCollections] = React.useState([]);
    const [keys, setKeys] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    const [modalState, setModalState] = React.useState("none");

    useEffect(() => {
        if (localStorage.length != 0) {
            var col = [];
            var key = [];
            for (let index = 0; index < Object.entries(localStorage).length; index++) {
                if (localStorage.key(index) != "ally-supports-cache") {
                    var value = JSON.parse(localStorage.getItem(localStorage.key(index)));
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

    const [isPageOpen, setIsPageOpen] = React.useState(true);
    const [toastState, setToastState] = React.useState("");
    const [updateModalState, setUpdateModalState] = React.useState("none");
    const [confirmationModalState, setConfirmationModalState] = React.useState("none");
    const [collectionToRemove, setCollectionToRemove] = React.useState("");

    function changePage() {
        setIsPageOpen(!isPageOpen);
    }

    function removeCollection(collection) {
        setFlag(!flag);
        let arr = [...keys];
        arr.splice(arr.indexOf(collection), 1);
        setKeys(arr);
        var col = JSON.parse(localStorage.getItem(collection));
        col.forEach(c => {
            var anime = JSON.parse(localStorage.getItem(c.id));
            anime.collections.splice(anime.collections.indexOf(collection), 1);
            localStorage.setItem(anime.id, JSON.stringify(anime));
        });
        localStorage.removeItem(collection);
        setToastState("success");
        setInterval(() => {
            setToastState("");
        }, 3000);
    }

    function openConfirmationModal(collection) {
        setConfirmationModalState("flex");
        setCollectionToRemove(collection);
    }

    function updateCollection(oldCollection, newCollection) {
        setFlag(!flag);
        let arr = [...keys];
        arr[arr.indexOf(oldCollection)] = newCollection;
        setKeys(arr);
        localStorage.setItem(newCollection, localStorage.getItem(oldCollection));
        var col = JSON.parse(localStorage.getItem(oldCollection));
        col.forEach(c => {
            var anime = JSON.parse(localStorage.getItem(c.id));
            anime.collections[anime.collections.indexOf(oldCollection)] = newCollection;
            localStorage.setItem(anime.id, JSON.stringify(anime));
        });
        localStorage.removeItem(oldCollection);
        setToastState("success");
        setInterval(() => {
            setToastState("");
        }, 3000);
    }

    function closeModal() {
        setModalState("none");
    }

    function openModal() {
        setModalState("flex");
    }

    function closeUpdateModal() {
        setUpdateModalState("none");
    }

    function closeConfirmationModal() {
        setConfirmationModalState("none");
    }

    function openUpdateModal(collection) {
        setUpdateModalState("flex");
        setCurrentCollection(collection);
    }

    function addNewCollection(collection) {
        if(localStorage.getItem(collection) != null) {
            setToastState("error");
        } else {
            localStorage.setItem(collection, JSON.stringify([]));
            setFlag(!flag);
            setToastState("success");
        }
        setInterval(() => {
            setToastState("");
        }, 3000);
    }

    const [currentCollection, setCurrentCollection] = React.useState("");

    return(
        <>
            <Navbar action={() => changePage()} />
            {isPageOpen &&
                <>
                    <Container>
                        <div css={css`
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            align-items: center;
                            padding-right: 3rem;
                        `}>
                            <Header title="Collections Lists" additional={
                                <>
                                    <AddButton id="default-collection-list-button" onClick={() => openModal()}>
                                        <p id="default-header-label">
                                            Add New Collection
                                        </p>
                                    </AddButton>
                                    <AddButton id="collection-list-button" onClick={() => openModal()}>
                                        <svg id="svg-header-label" css={css`
                                            color: rgb(66, 120, 245);
                                            width: 3.5rem;
                                        `} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="rgb(66, 120, 245)">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                        </svg>
                                    </AddButton>
                                </>
                            } />
                        </div>
                        <hr css={css`
                            margin: 0 3rem;
                        `} />
                        <div css={css`
                            display: flex;
                            justify-content: center;
                        `}>
                            <div className='collection-card' css={css`
                                display: flex;
                                flex-wrap: wrap;
                                width: 90rem;
                                align-items: center;
                                justify-content: space-around;
                            `}>
                                <>
                                    {collections?.length == 0 && <h1 css={css`
                                        color: rgb(156 163 175);
                                        margin-top: 3rem;
                                        margin-left: 5rem;
                                    `}>
                                            No Collections
                                        </h1>
                                    }
                                    {collections && collections?.length != 0 && collections?.map(function(c, index) {
                                        return (
                                            <>
                                                <div css={css`
                                                    margin: 1rem 0.75rem;
                                                `} key={index}>
                                                    <Link href={`/collections/${keys[index]}`}>
                                                        <CollectionContainer>
                                                                {c.length != 0 && 
                                                                    <img css={css`
                                                                        height: 5.25rem;
                                                                        width: 4rem;
                                                                    `} src={c[0]?.coverImage?.medium} />
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
                                                                    Anime : {c.length > 0 && c[0].title?.romaji} 
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
                                                                    `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </a> */}
                                                        </CollectionContainer>
                                                    </Link>
                                                    <DeleteButton className="collection-list-delete-button" onClick={() => openConfirmationModal(keys[index])}>
                                                        <p className='default-delete-label'>
                                                            Delete Collection
                                                        </p>
                                                        <a className='delete-svg' css={css`
                                                            color: white;
                                                            font-size: 0.75rem;
                                                            display: none;
                                                        `} onClick={() => removeCollection(keys[index])}>
                                                            <svg css={css`
                                                                width: 1.5rem;
                                                                top: 0.5rem;
                                                                right: 0.5rem;
                                                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </a>
                                                    </DeleteButton>
                                                    <UpdateButton className="collection-list-delete-button" onClick={() => openUpdateModal(keys[index])}>
                                                        <p className='default-delete-label'>
                                                            Edit Collection Name
                                                        </p>
                                                        <a className='delete-svg' css={css`
                                                            color: white;
                                                            font-size: 0.75rem;
                                                            display: none;
                                                        `} onClick={() => removeCollection(keys[index])}>
                                                            <svg css={css`
                                                                width: 1.5rem;
                                                                top: 0.5rem;
                                                                right: 0.5rem;
                                                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </a>
                                                    </UpdateButton>
                                                </div>
                                            </>
                                        );
                                    })}
                                </>
                            </div>
                        </div>
                    </Container>
                    <AddModals onAdd={addNewCollection} onClose={closeModal} display={modalState} />
                    <EditModals display={updateModalState} oldValue={currentCollection} onSubmit={updateCollection} onClose={closeUpdateModal} />
                    <SnackBar type={toastState} failedContent="Failed" successContent="Success" />
                    <ConfirmationModal onRemoveCollection={removeCollection} display={confirmationModalState} title={"Delete Confirmation"} onClose={closeConfirmationModal} content={collectionToRemove} />
                </>
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