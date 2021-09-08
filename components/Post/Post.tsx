import styled from "styled-components"
import Link from "next/link"

// @ts-ignore
export default function Post({ name, image, description, href }) {
  return (
    <Container>
      <Top>
        <Image src={image} />
      </Top>
      <Bottom>
        <Header>{name}</Header>
        <hr />
        <Description>{description}</Description>
        <Button>
          <Link href={href}>See More</Link>
        </Button>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  height: 50%;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 70%;
    height: 20%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`
const Top = styled.div``

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

const Button = styled.button`
  padding-left: 10px;
  color: var(--primary-color);
  a {
    text-decoration: underline;
    transition: ease-in 0.5s;
    font-size: 20px;
  }
  a:hover {
    color: var(--secondary-color);
  }
`

const Description = styled.p`
  color: var(--secondary-color);
  padding-left: 10px;
`
