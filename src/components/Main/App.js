import logo from './public/logo.svg';
import './public/App.css';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectPage from '../ProjectPage/ProjectPage';

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
