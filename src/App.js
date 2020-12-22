import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/About/AboutPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {
  return (
    <div className="App container">
      <LandingPage />
      <AboutPage />
      <ProjectPage />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
