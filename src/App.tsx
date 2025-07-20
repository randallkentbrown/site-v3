import './App.css'

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
    <div className="footer">
      <a href="https://github.com/randallkentbrown/site-v3" target="_blank">code</a>
      &nbsp;&bull;&nbsp;
      <span>have a great {word}</span>
    </div>
  );

}

function App() {
  
  return (
    <div className="frame">
      <div className="flexy" />
      <div className="app">
        <h1>Randall Kent Brown Jr.</h1>
        <div className="h-divider bg-primary" />
        <div className="contents">
          <p>Welcome to my site! I'm Kent Brown, a software developer from Wisconsin.</p>
          <p>I've got five years of software development experience, drawn from time spent in numerous industries and many excellent teams.</p>
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
        <Footer />
      </div>
      <div className="flexy" />
    </div>
  )
}

export default App
