// import { navbar, navbar_items} from './style'
import Link from 'next/link'
import React from 'react'
import { Nav, NavBar, NavItem } from '../template/style'

export default function Navbar() {
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
        </NavBar>
    )
}