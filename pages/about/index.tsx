import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'

export default function About() {
    return(
        <Wrapper>
            <Container>
                <Navbar />
                <Header>About Me:</Header>
                <Paragraph>
                    My Name is Dimitri Rose. I am a computer Science Student at the University of South Florida. I want to be able to use computers to expand the mind and leverage complex systems. I would like to work in the field of computational science. I enjoy working out, the martial arts and sports in general. There are also many other skills and topics I want to be versed in and this blog is going to be used to document my learning process. Feel free to contact me.
                </Paragraph>
            </Container>
        </Wrapper>
    )
}

const   Wrapper = styled.div`
background: var(--grey-color);~
`
const Container = styled.div`
max-width: 1000px;
margin-left: auto;
margin-right: auto;
min-height: 100vh;
`

const Header = styled.h1`
font-family: Absender, sans-serif;
font-size: 40px;
text-align: center;
color: var(--primary-color);
`

const Paragraph = styled.p`
font-family: Absender, sans-serif;
color: var(--secondary-color);
font-size: 24px;
margin-top: 20px;
`