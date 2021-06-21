import { useState } from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
    isOpen:boolean
}

function Sidebar({isOpen}:Props) {
    
    return (
        <StyledSideBar isOpen={isOpen}>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </StyledSideBar>
    )
}


const StyledSideBar = styled.div<Props>`
    position: fixed;
    width: 300px;
    right: 0;
    top: 0;
    transition: 0.3s ease all;
    transform: ${(props) => props.isOpen ? 'translateX(300px)' : 'translateX(0px)' };

    a {
        font-size: 12px;
        color :var(--secondary-color);

        &: hover {
        color :var(--p-coarylor);

        }
    }
`

export default Sidebar
im