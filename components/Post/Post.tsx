import styled from 'styled-components'
import Link from "next/link"

// @ts-ignore
export default function Post({name, image, description, href}) {
    return(
        <Container>
            <Top>
                <Image src={image} />
            </Top>
            <Bottom>
                <Header>{name}</Header>
                <hr />
                <Description>{description}</Description>
                <Link href={href}>See More</Link>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
  height: 700px;
  width: 30%;
  display: flex;
  flex-direction: column;
  @media(max-width: 900px) {
    width: 70%;
    margin: auto;
  }
`
const Top = styled.div`
    
`

const Image = styled.img`
  height: 300px;
  width: 100%;
`

const Header = styled.h1`
  color: var(--primary-color);
  padding-top: 10px;
  padding-left: 10px;
`

const Bottom = styled.div`
  background: #fff;
`

const Description = styled.div`
  color: var(--secondary-color);
  padding-left: 10px;  
`
