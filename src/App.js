import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/themes';
import { Navbar } from './components/Navbar/index';
import { Hero } from './components/HeroSection/index';
import { Skills } from './components/skills/index';
import { Education } from './components/Education/index';


//Styled Components

//Body
const Body =styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100% ;
  height: 100 %;
  overflow-x: hidden ;
`;

//Wrapper wraps up the skills, education
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
