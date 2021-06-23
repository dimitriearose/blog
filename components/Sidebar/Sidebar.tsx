import Link from 'next/link'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import {Instagram} from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';

interface Props {
    isOpen:boolean
}

function Sidebar({isOpen}:Props) {
    return (
        <StyledSideBar isOpen={isOpen}>
            <TopSideBar>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </TopSideBar>
            <BottomSideBar>
                <a target='_blank' href='https://twitter.com/dimitriearose' rel='noreferrer noopener'> <TwitterIcon/></a>
                <a target="_blank" href='https://www.linkedin.com/in/dimitri-rose-962211188/' rel='noreferrer noopener'><LinkedInIcon/></a>
                <a target="_blank" href='https://instagram.com/dimitriearose' rel='noreferrer noopener'><Instagram/></a>
                <a target="_blank" href='https://github.com/dimitriearose' rel='noreferrer noopener'><GitHubIcon/></a>
            </BottomSideBar>
        </StyledSideBar>
    )
}

const TopSideBar = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

const BottomSideBar = styled.div`
    a {
        margin-right: 10px;
        transition: 1s all ease-in-out;
        
    }
    a:hover {
        color: var(--primary-color);;
    }
    @media(max-width: 900px) {
        a {
            display: none;
        }
    }
    @media(max-width: 500px) {
        a {
            display: block;
        }
    }

`

const StyledSideBar = styled.div<Props>`
    position: fixed;
    width: 350px;
    height:100vh;
    z-index: 5;
    right: 0;
    top: 0;
    background-color: #fff;
    padding: 100px 30px 30px 30px;
    transition: 0.3s ease all;
    transform: ${(props) => props.isOpen ? 'translateX(0px)' : 'translateX(350px)' };
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px rgba(0,0,0,.3);


    a {
        font-size: 20px;
        color :var(--secondary-color);
        margin-bottom: 20px;
        transition: 0.5s ease-ease-in-out;

       &:hover {
        color :var(--primary-color);;
       }   
    }

    @media(max-width: 1080px) {
        width: 280px;
        transform: ${ (props) => props.isOpen ? 'translateX(80px)' : 'translateX(280px)' }
    }

    @media(max-width: 900px) {
        width: 280px;
        transform: ${ (props) => props.isOpen ? 'translateX(155px)' : 'translateX(280px)' }
    }

    @media(max-width: 500px) {
        width: 280px;
        transform: ${ (props) => props.isOpen ? 'translateX(150px)' : 'translateX(280px)' }
    }
    
`

export default Sidebar
