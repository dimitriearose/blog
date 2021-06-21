import {useState,useRef} from 'react'
import styles from "./Navbar.module.scss"
import Link from "next/link"
import Sidebar from '../Sidebar/Sidebar'
import gsap from 'gsap'

import styled from 'styled-components'


function Navbar() {

  const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false)

  const lineOneRef = useRef<HTMLDivElement>(null)
  const lineTwoRef = useRef<HTMLDivElement>(null)

  const onMenuOpen =  () => {
    if (isSidebarOpen){
      setIsSidebarOpen(false)
    }else {
      setIsSidebarOpen(true)
      
    }
  }


  return ( 
    <>
    <StyledNavbar>
      <Header>
        <Link href='/'>D//R</Link>
      </Header>
      <Menu aria-role='button' onClick={onMenuOpen}>
        <div ref={lineOneRef}/>
        <div ref={lineTwoRef}/>
      </Menu>
    </StyledNavbar>
       <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

const Header = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: var(--secondary-color);
  transition: all 1s ease-in-out;
  font-family: Absender;
  user-select:none;


  &:hover {
    color: var(--primary-color);
  }

`

const StyledNavbar = styled.div`
  display:flex;
  justify-content: space-between;
  max-width:1366px;
  align-items: center;
  padding: 2rem;
`

const Menu = styled.div`
max-height: 30px;
z-index: 10000;
cursor:pointer;

div {
  height: 3px;
  background-color: #000;
  width: 30px;
}

div:first-of-type {
  margin-bottom:5px;
}

`

export default Navbar
