import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavBar = styled.div`
    background-color: rgb(66, 120, 245);
    padding: 0.70rem 0;
`;

export const Nav = styled.ul`
    display: flex;
    margin-left: 0.75rem;
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
    margin: 1rem 1rem;
    padding-bottom: 1rem;
    width: 17vw;
    height: 65vh;

    &:hover {
        border: 1px solid rgb(156 163 175);
        cursor: pointer;
    }
`;

export const CardBody = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
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
`;

export const DotsPageButton = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 0.75rem;
    border-width: 0.1rem;
    border-color: rgb(209 213 219);
    background-color: white;
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
`;

export const PageTitle = styled.h1`
    font-size: 2rem;
    padding: 1.5rem 3rem;
`;

export const DeleteButton = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-width: 0;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    color: white;
    background-color: rgb(189, 28, 28);

    &:hover {
        background-color: rgba(189, 28, 28, 0.75);
        cursor: pointer;
    }
`;