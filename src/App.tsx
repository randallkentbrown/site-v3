import './App.css';
import { Routes, Route, Link } from 'react-router';
import { Bulleted, FlexySecret } from './components/Simple';
import { Routes as RoutesList, } from './resources/const';
import SteveGIF from './resources/steve-ballmer-microsoft.gif';

function Header() {

  /*
  <Link to={RoutesList.professional}>professional</Link>,
  <Link to={RoutesList.kentris}>kentris</Link>
  */

  return (
    <>
        <h1 className="no-bottom-margin">Randall Kent Brown Jr.</h1>
        <div className="endcap-row">
          <Bulleted elements={[
            <Link to={RoutesList.home}>home</Link>
          ]}/>
        </div>

    </>
  );

}

function Footer() {

  // fun little easter egg
  let time = new Date();
  let hours = time.getHours();
  let word = "time";
  if (hours < 6) {
    word = "night";
  } else if (hours < 12) {
    word = "morning";
  } else if (hours < 18) {
    word = "day";
  } else {
    word = "evening";
  }

  // return the footer
  return (
    <div className="endcap-row">
      <Bulleted elements={[
        <Link to={RoutesList.about}>about</Link>,
        <a href="https://github.com/randallkentbrown/site-v3" target="_blank">code</a>,
        <span>have a great {word}</span>
      ]}/>
    </div>
  );

}

function Root() {
  window.location.replace("/" + RoutesList.home);
  return <></>;
}

function Home() {

  return (
    <div className="developers-column flexy">
      <FlexySecret />
      <div className="developers-row">
        <div className="flexy" />
          <img width="440" height="328" src={SteveGIF}></img>
        <div className="flexy" />
      </div>
      <FlexySecret />
    </div>
  );

}

function About() {

  return (
    <>
      <div className="contents">
        <p className="no-top-margin">Welcome to my site! I'm Kent Brown, a software developer from Wisconsin.</p>
        <p>I've got five years of application development experience, drawn from time spent in numerous industries and many excellent teams. I've contributed as a software developer, a quality engineer, and a project manager.</p>
        At RIT in Rochester, NY, I got my formal education in:
        <ul>
        <li>software engineering (B.S. 2021)</li>
        <li>computer engineering (minor)</li>
        <li>environmental studies (immersion)</li>
        </ul>
        <p>I love to play video games in my free time. I'm currently working my way through my third attempt at Elden Ring.</p>
        Some of my other hobbies include:
        <ul>
        <li>Volleyball</li>
        <li>Dungeons & Dragons</li>
        <li>Reading - <i>some recommendations:</i></li>
          <ol>
            <li>The 13 &amp; &frac12; Lives of Captain Bluebear - Walter Moers</li>
            <li>The Anthropocene Reviewed - John Green</li>
            <li>The Mythical Man-Month - Frederick P. Brooks Jr.</li>
          </ol>
        </ul>
        There's not much else here yet, but thanks for visiting.
      </div>
      <div className="flexy" />
    </>
  );

}

function Contents() {

  return (
    <>
      <Routes>
        <Route path={RoutesList.root} element={<Root />} />
        <Route path={RoutesList.about} element={<About />} />
        <Route path={RoutesList.home} element={<Home />} />
      </Routes>
    </>
  );

}

function App() {
  
  return (
    <div className="frame">
      <div className="flexy" />
      <div className="app">
        <div className="app-margin-box" />
        <Header />
        <div className="h-divider bg-primary" />
        <Contents />
        <div className="h-divider bg-primary" />
        <Footer />
        <div className="app-margin-box" />
      </div>
      <div className="flexy" />
    </div>
  )
}

export default App;
