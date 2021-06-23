import {useState,useRef} from 'react'
import Link from "next/link"
import Sidebar from '../Sidebar/Sidebar'
import gsap from 'gsap'
import styled from 'styled-components'


function Navbar() {

  const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false)

  const lineOneRef = useRef<HTMLDivElement>(null)
  const lineTwoRef = useRef<HTMLDivElement>(null)

  const onMenuOpen =  () => {
    if (!isSidebarOpen){
      setIsSidebarOpen(true)
        gsap.to(lineOneRef.current, 0.5, { rotate: 45, y: 4, background:'#050505' })
        gsap.to(lineTwoRef.current, 0.5, { rotate: -45, y: -4, background:'#050505' })
    }else {
      setIsSidebarOpen(false)
      gsap.to(lineOneRef.current, 0.5, { rotate: 0, y: 0, background:'#050505' })
      gsap.to(lineTwoRef.current, 0.5, { rotate: 0, y: 0, background:'#050505' })
    }
  }

  return (
    <>
    <StyledNavbar>
      <Header>
        <Link href='/'>D//R</Link>
      </Header>
      <Menu role='button' aria-describedby='Button Which Opens Menu' onClick={onMenuOpen}>
        <div ref={lineOneRef}/>
        <div ref={lineTwoRef}/>
      </Menu>
    </StyledNavbar>
       <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

const Header = styled.h2`
  font-family: Absender,sans-serif;
  font-size: 32px;
  color: var(--secondary-color);
  transition: all 1s ease-in-out;
  user-select:none;

  &:hover {
    color: var(--primary-color);
  }

`

const StyledNavbar = styled.div`
  display:flex;
  justify-content: space-between;
  max-width:1500px;
  align-items: center;
  padding: 2rem;
`

const Menu = styled.div`
max-height: 30px;
z-index: 10000;
cursor:pointer;

@media(max-width: 1080px) {
      margin-right: 80px;
  }

div {
  height: 3px;
  background-color: #050505;
  width: 30px;
}

div:first-of-type {
  margin-bottom:5px;
}

`

export default Navbar
