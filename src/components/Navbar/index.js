import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display :flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition : 0.8s all ease'
  }
`;

const NavbarContainer= styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;


const NavLogo= styled(LinkR)`
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0 0px;
}
`;


const MobileIcon= styled.div`
  display:none;
  @media screen and (max-width: 760px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform :translate(-100%, 50%);
    font-size: 1.5rem;
    cursor:pointer;
    color: ${({ theme }) => theme.text_primary };
  }
`;


const NavItems= styled.ul`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style:none;

  @media screen and(max-width: 768px){
    display:none;
  }
`;

const NavLink= styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor:pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  :hover {
      color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer= styled.div`
  display:flex;
  align-items: center;
  justify-content: end;
  width:80%
  height:100%;
  padding: 0 6px;

  @media screen and (max-width: 760px){
    display: none;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;


export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;


export const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink>Home</NavLink>
        </NavItems>
        <ButtonContainer> 
          <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
}
