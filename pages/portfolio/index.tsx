import {useEffect, useState} from 'react'
import { GetStaticProps } from 'next'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'

const client = require('contentful').createClient({
    space: 's6ebgzome5xq',
    accessToken: 'PFcScn7p6B7BPzn5i3DScSwcCGwKVjeSvCO9sqXJw6k'
})

function Index() {
    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) {
            console.log(entries.items)
            return entries.items
        } 
      }
    
      const [posts, setPosts] = useState([])
    
      useEffect(() => {
        async function getPosts() {
          const allPosts = await fetchEntries()
          setPosts([...allPosts])
        }
        getPosts()
        console.log(posts)
    }, [])
    return (
        <Wrapper>
            <Container>
                <Navbar />
                <Header>My Recent Work:</Header>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: var(--grey-color);
`

const Container = styled.div`
max-width: 1000px;
margin-left: auto;
margin-right: auto;
min-height: 100vh;
@media(max-width: 900px) {
    padding-left: 20px;
    padding-right: 20px;
}
`
const Header = styled.h1`
font-family: Absender, sans-serif;
font-size: 40px;
text-align: center;
color: var(--primary-color);
`

export default Index
