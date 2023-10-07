import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';

const Container= styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  padding: 50px 0px;  
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width:100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight:600;
  text-align:center;
  margin-top:12px;
  color: ${({ theme })=> theme.text_primary};

  @media screen and (max-width:760px ){
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme })=> theme.text_secondary};

  @media and screen(max-width: 760px ){
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width:100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 10px;
  gap:12px;
`;

export const Experience = () => {
  return (
    <Container id="experience"> 
      <Wrapper>
        <Title>Experience</Title>
        <Desc> Here is my experience as a Software Developer</Desc>
        <TimelineSection>
          <Timeline>
              {experiences.map((experience, index)=>(
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary"/>
                    { index !== experiences.length-1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{  py: '12px', px: 2 }}>
                    <ExperienceCard experience={experience}/>
                  </TimelineContent>
                </TimelineItem>
              ))}
          </Timeline>      
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}
