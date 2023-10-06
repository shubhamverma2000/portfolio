import React from 'react'
import styled from 'styled-components'
//import {darkTheme, lightTheme} from '../../utils/Themes';
import {Bio} from '../../data/constants'
import Typewriter from "typewriter-effect";
import ShubhamImg from "../../images/Shubham.jpg"
import HeroBgAnimation from "../HeroBGAnimation/index"
import { HeroContainer, HeroBg, HeroLeftContainer, Image, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'

export const Hero = () => {
  return (
    <div id="#about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br/>
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop:true,
                  }}
                /> 
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={ Bio.resume} target="_blank"> Check my Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={ShubhamImg} alt="Shubham's Picture"/>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

