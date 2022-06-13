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
    margin: 1rem 1rem;
`;

export const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem;
`;

export const PrevButton = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 0.75rem;
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
    padding: 0.75rem 0.75rem;
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
    padding: 0.75rem 0.75rem;
`;

export const PageButton = styled.button`
    background-color: white;
    border-color: rgb(209 213 219);
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 0.75rem;
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
    padding: 0.5rem 1rem;
    border-width: 0.1rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 0.25rem;
    color: white;
    background-color: #4f46e5;
    margin: 0.2rem 0;

    &:hover {
        background-color: #4338ca;
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