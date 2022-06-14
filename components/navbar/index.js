/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import React from 'react'
import {BurgerBar, BurgerButton, Nav, NavBar, NavItem} from '../template/style'
import {css} from '@emotion/react';

export default function Navbar(props) {
    const {
        action
    } = props;
    return (
        <NavBar>
            <Nav>
                <Link href="/">
                    <NavItem>
                        Home
                    </NavItem>
                </Link>
                <Link href="/collections">
                    <NavItem>
                        Collections
                    </NavItem>
                </Link>
            </Nav>
            <BurgerButton css={css`
            `} onClick={action}>
                <BurgerBar />
                <BurgerBar />
                <BurgerBar />
            </BurgerButton>
        </NavBar>
    )
}