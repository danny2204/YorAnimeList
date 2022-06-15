import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    #collection-list-button {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        padding: 0.75rem;
        align-items: center;
        margin-left: 0;

        #desktop-title {
            display: none;
        }

        #mobile-title {
            display: block;
        }

        #add-to-collection {
            width: 98%;
        }

        #genre-container {
            display: none;
        }

        .mobile-information {
            display: block;
        }

        .desktop-information {
            display: none;
        }

        #mobile-container {
            flex-direction: column;
        }

        .collection-card {
            width: 100%;
            justify-content: center;
        }

        .divider {
            display: none;
        }

        .delete-svg {
            display: block;
        }

        .default-delete-label {
            display: none;
        }

        #collections-detail-container {
            grid-template-columns: repeat(2, minmax(0,1fr));
            gap: 0;
        }
        
        #default-collection-list-button {
            display: none;
        }

        .collection-list-delete-button {
            width: 9rem;
        }

        #collection-list-button {
            background-color: transparent;
            position: fixed;
            bottom: 2.5rem;
            color: white;
            right: -2rem;
            z-index: 10;
            display: block;
        }

        .outer-card-container {
            margin: 1rem 0.25rem;
        }
    }
`;

export const BurgerButton = styled.div`
    display: none;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 1rem;

    @media only screen and (max-width: 400px) {
        display: flex;
    }
`;

export const NavBar = styled.div`
    background-color: rgb(66, 120, 245);
    padding: 0.70rem 0;
`;

export const Nav = styled.ul`
    display: flex;
    margin-left: 0.75rem;

    @media only screen and (max-width: 400px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    color: rgb(231 229 228);
    margin-left: 0.75rem;
    list-style-type: none;
    padding: 0.30rem 0.35rem;
    border-radius: 0.25rem;

    &:hover {
        background-color: white;
        cursor: pointer;
        color: black;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-top-width: 0px;
    border-bottom-width: 1px;
    border: 1px solid rgb(209 213 219);
    padding-bottom: 1rem;
    width: 15rem;
    height: 30rem;

    &:hover {
        border: 1px solid rgb(156 163 175);
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        width: 10rem;
        height: 13rem;

        .mobile-anime-container {
            margin: 0 !important;
        }
    }
`;

export const CardBody = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1rem;

    @media only screen and (max-width: 400px) {
        display: none;
    }
`;

export const PrevButton = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    border-width: 0.1rem;
    border-color: rgb(156 163 175);
    background-color: white;
    
    &:hover {
        background-color: rgb(249 250 251);
    }
`;

export const NextButton = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-width: 0.1rem;
    border-color: rgb(156 163 175);
    background-color: white;

    &:hover {
        background-color: rgb(249 250 251);
    }
`;

export const CurrentPageButton = styled.button`
    z-index: 10;
    background-color: #eef2ff;
    border-width: 0.1rem;
    border-color: #6366f1;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;

    @media only screen and (max-width: 400px) {
        display: none;
    }
`;

export const PageButton = styled.button`
    background-color: white;
    border-color: rgb(209 213 219);
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    border-width: 0.1rem;

    &:hover {
        background-color: rgb(249 250 251);
    }

    @media only screen and (max-width: 400px) {
        display: none;
    }
`;

export const DotsPageButton = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 0.75rem;
    border-width: 0.1rem;
    border-color: rgb(209 213 219);
    background-color: white;

    @media only screen and (max-width: 400px) {
        display: none;
    }
`;

export const AddButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-width: 0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 0.25rem;
    color: white;
    background-color: rgb(66, 120, 245);
    margin: 0.2rem 0;

    &:hover {
        background-color: #4338ca;
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        height: 2rem;
        width: 7.5rem;
        font-size: 0.75rem;

        > svg {
            display: none;
        }

        #default-header-label {
            display: none;
        }

        #svg-header-label {
            display: block;
        }
    }
`;

export const CancelButton = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-width: 0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 0.25rem;
    color: white;
    background-color: rgb(189, 28, 28);
    margin: 0.2rem 0;

    &:hover {
        background-color: rgba(189, 28, 28, 0.75);
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        height: 2rem;
        width: 7.5rem;

        svg {
            display: none;
        }
    }
`;

export const Information = styled.p`
    margin-top: 0.5rem;
`;

export const Label = styled.div`
    background-color: rgb(66, 120, 245);
    padding: 0.75rem 2rem;
    margin: 0.75rem 1rem 0.75rem 0;
    color: white;
    border-radius: 3rem;
`;

export const SmallLabel = styled.div`
    background-color: rgb(66, 120, 245);
    padding: 0.2rem 0.75rem;
    color: white;
    border-radius: 0.25rem;
    text-align: center;
`;

export const TabBar = styled.div`
    display: block;
    width: 100%;
    border-color: rgb(209 213 219);
    border-radius: 0.25rem;
    border-bottom: 1px;
    margin-bottom: 1rem;
`;

export const Tab = styled.a`
    &:hover {
        color: rgb(107 114 128);
        border-color: rgb(209 213 219);
        cursor: pointer;
    }

    white-space: nowrap;
    padding: 1.75rem 1.25rem;
    border-bottom-width: 1.5rem; 
`;

export const ActiveTab = styled.a`
    &:hover {
        color: rgb(107 114 128);
        border-color: rgb(209 213 219);
        cursor: pointer;
    }

    white-space: nowrap;
    padding: 1.75rem 1.25rem;
    border-bottom: 1.5rem #6366f1; 
    color: #6366f1;
`;

export const TabBody = styled.ul`
    overflow-y: auto;
    max-height: 30vh;
    margin-top: 1rem;

`;
    
export const ListItem = styled.li`
    padding: 1.5rem 0;
    display: flex;
    border-bottom: 1px solid rgb(209 213 219);
    align-items: center;
`;

export const ModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const Modal = styled.div`
    background-color: white;
    border-radius: 0.25rem;
    padding: 1.5rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    @media only screen and (max-width: 400px) {
        width: 80%;
    }
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid rgb(209 213 219);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.75rem 0;
`;

export const CollectionContainer = styled.div`
    position: relative;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border: 1px solid rgb(209 213 219);
    background-color: white;
    padding: 1rem 1.25rem;
    box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 0.05);
    display: flex;
    align-items: center;
    width: 30rem;
    height: 7rem;

    &:hover {
        border: 1px solid rgb(156 163 175);
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        width: 18rem;
    }
`;

export const PageTitle = styled.h1`
    font-size: 1.5rem;
    padding: 1.5rem 3rem;

    @media only screen and (max-width: 400px) {
        padding: 0.5rem 1rem;
    }
`;

export const DeleteButton = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-width: 0;
    width: 15rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-bottom-left-radius: 0.25rem;
    color: white;
    background-color: rgb(189, 28, 28);

    &:hover {
        background-color: rgba(189, 28, 28, 0.75);
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        width: 10rem;
        height: 2rem;
        padding: 0;
        align-items: center;
    }
`;

export const UpdateButton = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-width: 0;
    width: 15rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    // border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    color: white;
    background-color: rgb(66, 96, 201);

    &:hover {
        background-color: rgba(66, 96, 201, 0.75);
        cursor: pointer;
    }

    @media only screen and (max-width: 400px) {
        width: 10rem;
        height: 2rem;
        padding: 0;
        align-items: center;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 80%;

    @media only screen and (max-width: 400px) {
        height: 10rem;
        width: 10rem;
    }
`;

export const Title = styled.h5`
    margin: 0;
    text-align: center;
    width: 12rem;
    word-wrap: break-word;

    @media only screen and (max-width: 400px) {
        width: 100%;
        font-size: 0.75rem;
    }
`;

export const BurgerBar = styled.div`
    width: 1.75rem;
    height: 0.2rem;
    background-color: white;
    margin: 0.25rem 0;
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Loader = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    width: 50px;
    margin: -25px 0 0 -25px;
    border: 2px solid transparent;
    border-top-color: #000000;
    border-radius: 50%;
    -webkit-animation: spin7 1.5s ease infinite;
    animation: spin7 1.5s ease infinite;
  
    &:before {
        content: "";
        position: absolute;
        top: 7px;
        right: 7px;
        bottom: 7px;
        left: 7px;
        border: 2px solid transparent;
        border-radius: 50%;
        border-top-color: #000000;
        -webkit-animation: spin7 3s linear infinite;
                animation: spin7 3s linear infinite;
    }
    
    &:after {
        content: "";
        position: absolute;
        top: 15px;
        right: 15px;
        bottom: 15px;
        left: 15px;
        border: 2px solid transparent;
        border-radius: 50%;
        border-top-color: #000000;
        -webkit-animation: spin7 1.5s ease infinite;
                animation: spin7 1.5s ease infinite;
    }

    @keyframes spin7 {
        from {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        }
        to {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
        }
    }
`;

export const SuccessToast = styled.div`
    background-color: rgb(67, 191, 67);
    border-radius: 0.25rem;
    border: 1px solid rgb(69, 247, 82);
    padding: 1rem;
    width: 25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: white;

    @media only screen and (max-width: 400px) {
        width: 80%;
    }
`;

export const ErrorToast = styled.div`
    background-color: rgb(196, 57, 69);
    border-radius: 0.25rem;
    border: 1px solid rgb(252, 71, 71);
    padding: 1rem;
    width: 25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: white;

    @media only screen and (max-width: 400px) {
        width: 80%;
    }
`;