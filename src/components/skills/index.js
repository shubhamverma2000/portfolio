import React from 'react'
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container= styled.div`
  display :flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
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

const SkillsContainer= styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap:30px;
`;

const Skill=styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme })=> theme.card};
  border: 0.1px solid #854CE6;
  border-radius: 16px;
  padding: 18px 36px;
  display:flex;
  flex-direction: column;
  
  @media and screen(max-width: 760px){
    max-width: 400px;
    padding: 10px 36px; 
  }

  @media and screen(max-width: 580px){
    max-width: 330px;
    padding: 10px 36px; 
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color:  ${({ theme })=> theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList= styled.div`
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
`;

const SkillItem= styled.div`
  display:flex;
  align-items:center;
  gap: 8px;
  justify-content:center;
  font-size: 16px;
  color: ${({ theme })=> theme.text_primary +80 };
  border-radius: 12px;
  border: 1px solid ${({ theme })=> theme.text_primary +80 };
  padding: 12px 16px;
  font-weight: 400;

  @media screen and(max-width: 768px ){
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and(max-width: 500 ){
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage=styled.img`
  width:20px;
  height: 20px;
`;


export const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past two years.
        </Desc>
        <SkillsContainer>
          {skills.map((item)=>(
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {
                  item.skills.map((skill)=>(
                    <SkillItem>
                      <SkillImage src={skill.image}></SkillImage>
                      {skill.name}
                    </SkillItem>
                  ))
                }
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

