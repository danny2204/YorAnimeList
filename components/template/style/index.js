import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavBar = styled.div`
    background-color: rgb(66, 120, 245);
    padding: 0.70rem 0;
`

export const Nav = styled.ul`
    display: flex;
    margin-left: 0.75rem;
`

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
`

const Card = styled.div`
    col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200
`;

    // text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium