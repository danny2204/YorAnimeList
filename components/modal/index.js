/** @jsxImportSource @emotion/react */
import { 
    ModalContainer,
    Modal,
    ListItem,
    AddButton,
    Input,
    CancelButton
} from "../template/style";
import {css} from '@emotion/react';
import React from "react";
import Link from "next/link";

export function AddModals(props) {
    const {
        display,
        onClose,
        onAdd
    } = props;

    const [content, setContent] = React.useState("");

    function add() {
        onAdd(content);
        onClose();
    }

    return(
        <ModalContainer css={css`
            display: ${display}
        `}>
            <Modal>
                <h1>Add New Collection</h1>
                <hr css={css`
                    width: 100%;
                    margin-top: 0.75rem;
                `} />
                <Input placeholder="Input Collection Name" onChange={(e) => setContent(e.target.value)} />
                <div css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}>
                    <CancelButton css={css`
                        align-items: center;
                    `} onClick={() => onClose()}>
                        <svg css={css`
                            height: 1rem;
                            margin: 0 0.25rem;
                        `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                    </CancelButton>
                    <AddButton onClick={() => add()}>
                        <svg css={css`
                            height: 1rem;
                            margin: 0 0.25rem;
                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Add New Collection
                    </AddButton>
                </div>
            </Modal>
        </ModalContainer>
    )
}

export function EditModals(props) {
    const {
        display,
        onClose,
        onSubmit,
        oldValue
    } = props;

    const [content, setContent] = React.useState("");

    function submit() {
        onSubmit(oldValue, content);
        onClose();
    }

    return(
        <ModalContainer css={css`
            display: ${display}
        `}>
            <Modal>
                <h1>New Collection Name</h1>
                <hr css={css`
                    width: 100%;
                    margin-top: 0.75rem;
                `} />
                <Input placeholder={oldValue} onChange={(e) => setContent(e.target.value)} />
                <div css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}>
                    <CancelButton css={css`
                        align-items: center;
                    `} onClick={() => onClose()}>
                        <svg css={css`
                            height: 1rem;
                            margin: 0 0.25rem;
                        `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                    </CancelButton>
                    <AddButton onClick={() => submit()}>
                        <svg css={css`
                            height: 1rem;
                            margin: 0 0.25rem;
                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Edit Name
                    </AddButton>
                </div>
            </Modal>
        </ModalContainer>
    )
}

export function Modals(props) {
    const {
        data,
        display,
        onClose,
        addToCollection,
        buttonDisplay,
        title
    } = props;

    function add() {
        addToCollection(content, checkedCollection);
        onClose();
    }

    const [checkedCollection, setCheckedCollection] = React.useState([]);

    function isCollectionExist(collection) {
        var temp = [...checkedCollection];
        if(temp.indexOf(collection) != -1) {
            temp.splice(temp.indexOf(collection), 1);
        } else {
            temp.push(collection);
        }
        setCheckedCollection(temp);
    }

    function isChecked(collection) {
        if(checkedCollection.indexOf(collection) == -1) {
            return false;
        } else {
            return true;
        }
    }

    const [content, setContent] = React.useState("");

    return(
        <ModalContainer css={css`
            display: ${display};
        `}>
            <Modal>
                <h1>{title}</h1>
                <hr css={css`
                    width: 100%;
                    margin-top: 0.75rem;
                `} />
                <ul css={css`
                    margin: 2rem 0;
                    width: 100%;
                    max-height: 20rem;
                    overflow-y: auto;
                `}>
                    {data?.length == 0 && <p>No Collections</p>}
                    {buttonDisplay == "flex" && data?.map((d) => {
                        return <ListItem css={css`
                            padding-left: 2rem;

                            &:hover {
                                cursor: pointer;
                                background-color: rgb(229 231 235);
                            }
                        `} key={d}
                            onClick={() => isCollectionExist(d)}
                        // onClick={() => addToCollection(d)}
                        >
                            <input css={css`
                                transform: scale(1.5);
                            `} checked={isChecked(d)} id={d} type="checkbox" />
                            <label css={css`
                                padding-left: 1rem;
                            `} htmlFor={d}>{d}</label>
                        </ListItem>
                    })}

                    {buttonDisplay == "none" && data?.map((d) => {
                        return (
                            <Link key={d} href={`/collections/${d}`}>
                                <ListItem css={css`
                                    padding-left: 2rem;

                                    &:hover {
                                        cursor: pointer;
                                        background-color: rgb(229 231 235);
                                    }
                                `}>
                                    {d}
                                </ListItem>
                            </Link>
                        )
                    })}
                </ul>
                <Input css={css`
                    display: ${buttonDisplay}
                `} placeholder="Input Collection Name" onChange={(e) => setContent(e.target.value)} />
                <div css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}>
                    <CancelButton css={css`
                        align-items: center;
                    `} onClick={() => onClose()}>
                        <svg css={css`
                            height: 1rem;
                            margin: 0 0.25rem;
                        `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                    </CancelButton>
                    <AddButton css={css`
                        display: ${buttonDisplay};
                    `} onClick={() => add()}>
                        <svg css={css`
                            height: 1.25rem;
                            margin: 0 0.25rem;
                            `} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Add To Collection
                    </AddButton>
                </div>
            </Modal>
        </ModalContainer>
    )
}

export function ConfirmationModal(props) {
    const {
        data,
        display,
        onClose,
        onRemoveCollection,
        buttonDisplay,
        title,
        content,
        contentId
    } = props;

    function add() {
        if(contentId != null) {
            onRemoveCollection(contentId);
        } else {
            onRemoveCollection(content);
        }
        onClose();
    }

    return(
        <ModalContainer css={css`
            display: ${display};
        `}>
            <Modal>
                <h1>{title}</h1>
                <hr css={css`
                    width: 100%;
                    margin-top: 0.75rem;
                `} />

                <p css={css`
                    padding: 2rem;
                    text-align: center;
                `}>
                    Are you sure you want to remove {content} ?
                </p>

                <div css={css`
                    display: flex;
                    width: 80%;
                    justify-content: space-between;
                `}>
                    <CancelButton css={css`
                        align-items: center;
                    `} onClick={() => onClose()}>
                        No
                    </CancelButton>
                    <AddButton css={css`
                        display: ${buttonDisplay};
                    `} onClick={() => add()}>
                        Yes
                    </AddButton>
                </div>
            </Modal>
        </ModalContainer>
    )
}