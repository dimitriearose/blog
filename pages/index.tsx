import { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import styles from "../styles/Home.module.scss"
import Typewriter from "react-simple-typewriter"
import "react-simple-typewriter/dist/index.css"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Instagram } from "@material-ui/icons"
import GitHubIcon from "@material-ui/icons/GitHub"

import styled from "styled-components"

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  const onResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>Dimitri Rose</title>
          <meta name='description' content='Generated by create next app' />
          {/*/<link rel='icon' href='/favicon.ico' />*/}
        </Head>

        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.body__header}>
            Dimitri Rose{`${windowWidth < 700 ? "" : ":"}`}
          </h1>
          <TypeWriterContainer>
            <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Engineer", "Designer", "Content Creator"]}
            />
          </TypeWriterContainer>
        </div>
        <ButtonContainer className='pt-24 m-auto'>
          <a
            href='https://twitter.com/dimitriearose'
            target='_blank'
            rel='noreferrer noopener'
            className={styles.icons__icon}>
            <TwitterIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/dimitri-rose-962211188/'
            rel='noreferrer noopener'
            target='_blank'
            className={styles.icons__icon}>
            <LinkedInIcon />
          </a>
          <a
            href='https://instagram.com/dimitriearose'
            target='_blank'
            rel='noreferrer noopener'
            className={styles.icons__icon}>
            <Instagram />
          </a>
          <a
            href='https://github.com/dimitriearose'
            target='_blank'
            rel='noreferrer noopener'
            className={styles.icons__icon}>
            <GitHubIcon />
          </a>
        </ButtonContainer>
      </div>
    </div>
  )
}

const TypeWriterContainer = styled.div`
  @media (max-width: 1080px) {
    padding-left: 60px;
    padding-bottom: 30px;
  }

  @media (max-width: 900px) {
    padding-left: 60px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const ButtonContainer = styled.div`
  a:hover {
    color: var(--primary-color);
  }
  @media (max-width: 1080px) {
    padding-left: 60px;
    padding-bottom: 30px;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 850px) {
    display: block;
    margin: auto;
    padding-left: 60px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`
