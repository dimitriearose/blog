import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'

function Error() {
    return (
        <Container>
            <Navbar />
            <ImageContainer>
            <Image src="/undraw_page_not_found_su7k.svg" alt="Not Found." />
            </ImageContainer>
            <Link href='/'>
                <A>
                &larr; Home
                </A>
            </Link>
        </Container>
    )
}


const A = styled.a`
margin: auto;
display:block;
text-align:center;
font-size: 1.3rem;
padding: .5rem;
background-color: var(--primary-color);
color: #fff;
border-radius: 2px;
cursor:pointer;
max-width: 30rem;
transition: .2s ease-in-out;


&:hover {
    background-color: var(--secondary-color);
}
`


const Container = styled.div`
max-width: 1366px;
margin: auto;
overflow-y: hidden;
`

const ImageContainer = styled.div`
margin: auto;
margin-bottom: 30px;
`

const Image = styled.img`
margin: auto;
width: '100px';
height: '100px';
`

export default Error
