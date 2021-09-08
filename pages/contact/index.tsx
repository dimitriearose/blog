import React from "react"
import styled from "styled-components"
import Navbar from "../../components/Navbar/Navbar"

function Contact() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <List>
          <ListItem>
            <ListLink>
              <a href=''></a>
            </ListLink>
          </ListItem>
        </List>
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
  @media (max-width: 900px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li``
const ListLink = styled.a``
export default Contact
