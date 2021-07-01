import {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import Link from 'next/link'
import styled from 'styled-components'

const client = require('contentful').createClient({
    space: 's6ebgzome5xq',
    accessToken: 'PFcScn7p6B7BPzn5i3DScSwcCGwKVjeSvCO9sqXJw6k'
})

function Index() {
    async function fetchEntries() {
        const entries = await client.getEntries({
            'content_type': 'portfolio',
            'limit': 3

        })
        if (entries.items) {
            return entries.items
        }
      }

      const [posts, setPosts] = useState([])

      useEffect(() => {
        async function getPosts() {
          const allPosts = await fetchEntries()
          //@ts-ignore
          setPosts([...allPosts])
            console.log(allPosts)
        }
        getPosts().then(() => console.log('loaded posts') )
    }, [])

    return (
        <Wrapper>
            <Container>
                <Navbar />
                <Header>My Recent Work:</Header>
                <PostContainer>
                    <Post
                        name="weBlack"
                        image="https://avatars.githubusercontent.com/u/60557916?v=4"
                        description="This is a social media site I am currently working on."
                        href={`/portfolio/test`}
                    />
                    <Post
                        name="weBlack"
                        image="https://avatars.githubusercontent.com/u/60557916?v=4"
                        description="This is a social media site I am currently working on."
                        href={`/portfolio/test`}
                    />
                    <Post
                        name="weBlack"
                        image="https://avatars.githubusercontent.com/u/60557916?v=4"
                        description="This is a social media site I am currently working on."
                        href={`/portfolio/test`}
                    />
                </PostContainer>
                <SeeAll>
                    <Link href='/portfolio/all'>See All My Work</Link>
                </SeeAll>
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
  padding-bottom: 30px;
color: var(--primary-color);
`

const PostContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto ;
`

const SeeAll = styled.button`
    
`

export default Index
