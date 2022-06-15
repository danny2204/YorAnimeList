/** @jsxImportSource @emotion/react */
import 
    Card
from "../../card";
import { AddButton, Container, DeleteButton } from "../style";
import {css} from "@emotion/react"
import React, { useEffect } from "react";
import { Modals } from "../../modal";
import SnackBar from "../../snackbar";

export default function Layout(props) {
    const {
        data,
        isPage,
        action
    } = props;
    
    const style = {
        margin: 0
    }

    const [checkedAnime, setCheckedAnime] = React.useState([]);
    const [isBulk, setIsBulk] = React.useState("none");
    const [modalState, setModalState] = React.useState("none");
    const [collection, setCollection] = React.useState([]);
    const [toastState, setToastState] = React.useState("");

    useEffect(() => {
        setCollection(getAllCollections());
    }, [isBulk]);

    function isAnimeExist(anime) {
        var temp = [...checkedAnime];
        if(temp.indexOf(anime) != -1) {
            temp.splice(temp.indexOf(anime), 1);
        } else {
            temp.push(anime);
        }
        setCheckedAnime(temp);
    }

    function isChecked(anime) {
        if(checkedAnime.indexOf(anime) == -1) {
            return false;
        } else {
            return true;
        }
    }

    function displayBulkMenu() {
        if(isBulk == "none") {
            setCheckedAnime([]);
            setIsBulk("block");
        } else {
            setIsBulk("none");
            setModalState("none");
        }
    }

    function showAddModal() {
        setIsBulk("none");
        setModalState("flex");
    }

    function closeAddModal() {
        setModalState("none");
    }

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

    function addAnime(collection, data) {
        if (!localStorage.getItem(data.id)) {
            var anime = Object.assign({collections: [collection]}, data)
            localStorage.setItem(data.id, JSON.stringify(anime));
        } else {
            var animeCollections = JSON.parse(localStorage.getItem(data.id));
            animeCollections.collections.push(collection);
            localStorage.setItem(data.id, JSON.stringify(animeCollections));
        }
        setCollection(getAllCollections());
    }

    function addBulkCollection(name) {
        var collection = name;
        checkedAnime.forEach(data => {
            if (localStorage.getItem(collection) == null){
                localStorage.setItem(collection, JSON.stringify([data]));
                addAnime(collection, data);
                setToastState("success");
                    setInterval(function() {
                        setToastState("")
                    }, 3000);
            } else {
                var test = JSON.parse(localStorage.getItem(collection));
                if(test.indexOf(data) != -1) {
                    setToastState("error");
                    setInterval(function() {
                        setToastState("")
                    }, 3000);
                } else if(test.indexOf(data) == -1) {
                    test.push(data);
                    localStorage.setItem(collection, JSON.stringify(test));
                    addAnime(collection, data);
                    setToastState("success");
                    setInterval(function() {
                        setToastState("")
                    }, 3000);
                    closeAddModal()
                }
            }
        });
    }

    return(
        <div css={css`
            display: flex;
            justify-content: center;
        `}>
            <div id="collections-detail-container" css={css`
                display: grid;
                grid-template-columns: repeat(5, minmax(0,1fr));
                gap: 1rem;
            `}>
                {isPage == true && data != null ? data?.Page.media.map(function(d, idx) {
                    return (
                        <div css={css`
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: center;
                        `} key={idx}>
                            <div className="outer-card-container" css={css`
                                position: relative;
                            `}>
                                <Card
                                    css={css`
                                        position: relative
                                    `}
                                    key={idx}
                                    season={d.seasonInt} episode={d.episodes}
                                    title={d.title.romaji} image={d.coverImage.large}
                                    id={d.id}>
                                        <div css={css`
                                            position: absolute;
                                            display: ${isBulk};
                                            background-color: rgba(81, 81, 82, 0.6);
                                            width: 100%;
                                            height: 100%;
                                            z-index: 999;
                                        `} onClick={() => isAnimeExist(d)}>
                                            <input css={css`
                                                position: absolute;
                                                top: 1rem;
                                                right: 1rem;
                                                transform: scale(2);
                                            `} type="checkbox" readOnly={true} checked={isChecked(d)} />
                                        </div>
                                </Card>
                            </div>
                        </div>
                        )
                }) : ""}
                {isPage == false && data != null && data.map(function(d, idx) {
                    return (
                        <div className="collection-detail-container" css={css`
                            margin: 1rem 0.25rem;
                        `} key={idx}>
                            <Card
                                className="mobile-anime-container"
                                style={style}
                                key={idx}
                                season={d.seasonInt} episode={d.episodes}
                                title={d.title.romaji} image={d.coverImage.large}
                                id={d.id}>
                            </Card>
                            <DeleteButton css={css`
                                width: 15rem;
                            `} onClick={() => action(d.id)}>
                                <p className='default-delete-label'>
                                    Remove From Collection
                                </p>
                                <a className='delete-svg' css={css`
                                    color: white;
                                    font-size: 0.75rem;
                                    display: none;
                                `} onClick={() => removeCollection(keys[index])}>
                                    <svg css={css`
                                        width: 1.25rem;
                                    `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </a>
                            </DeleteButton>
                        </div>
                    )
                })}
                {isPage == true && isBulk == "none" && 
                    <div css={css`
                        position: fixed;
                        bottom: 1.5rem;
                        right: 1.5rem;
                        background: rgb(66, 120, 245);
                        padding: 1rem;
                        border-radius: 100%;
                        z-index: 1000;
                    `} onClick={() => displayBulkMenu()}>
                        <svg css={css`
                            color: white;
                            width: 2rem;
                        `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                }
                {isPage == true && isBulk == "block" && 
                    <div css={css`
                        position: fixed;
                        bottom: 1.5rem;
                        right: 1.5rem;
                        z-index: 1000;
                        display: flex;
                        align-items: center;
                    `}>
                        {checkedAnime.length != 0 && 
                            <div css={css`
                                margin-right: 1rem;
                                background: rgb(66, 120, 245);
                                padding: 1rem;
                                border-radius: 100%;
                            `} onClick={() => showAddModal()} >
                                <svg css={css`
                                    color: white;
                                    width: 2rem;
                                `} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                        }
                        <div css={css`
                            background: rgb(189, 28, 28);
                            border-radius: 100%;
                            padding: 1rem;
                        `} onClick={() => displayBulkMenu()}>
                            <svg css={css`
                                color: white;
                                width: 2rem;
                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                }
            </div>
            <Modals css={css`
                z-index: 9900;
            `} addToCollection={addBulkCollection} title={"Add To Collection"} buttonDisplay={"flex"} display={modalState} onClose={() => closeAddModal()} data={collection} />
            <SnackBar type={toastState} failedContent="Failed To Add New Collection" successContent="Successfully Add New Collection" />
        </div>
    )
}