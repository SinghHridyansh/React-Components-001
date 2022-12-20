import logo from "./logo.svg";
import "./App.css";

function App() {
  const Deets = () => {
    return (
      <div>
        <h1>Hridyansh Singh</h1>

        <p>Motion Graphics Designer</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/hridyansh-singh-7a92a51a3/">
            Linkedin
          </a>
          <br></br>
          <a href="https://github.com/SinghHridyansh">github</a>
        </div>
      </div>
    );
  };

  const Exper = () =>{
    return(
    <div>
      <h2>Experience</h2>
    <h3>Motion Graphics Designer at Fantasy Squad pvt. ltd.</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, delectus
      numquam? Nemo sapiente ut delectus autem dolore facere unde architecto
      odio ducimus hic ullam quos tempora, aperiam aut fuga amet quasi! Impedit
      accusantium molestias ea est quia porro iure dolor corrupti suscipit quae,
      saepe reiciendis explicabo velit, dignissimos et, exercitationem minima
      laudantium eum rem animi sit id ullam. Quasi expedita, blanditiis hic
      ipsam recusandae consequatur temporibus odit nobis. Atque neque natus
      mollitia quos rem asperiores, fuga sit aspernatur consequatur dolor.
    </p>
    
    <h3>Head Coordinator at Verve Fashion Team</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, delectus
      numquam? Nemo sapiente ut delectus autem dolore facere unde architecto
      odio ducimus hic ullam quos tempora, aperiam aut fuga amet quasi! Impedit
      accusantium molestias ea est quia porro iure dolor corrupti suscipit quae,
      saepe reiciendis explicabo velit, dignissimos et, exercitationem minima
      laudantium eum rem animi sit id ullam. Quasi expedita, blanditiis hic
      ipsam recusandae consequatur temporibus odit nobis. Atque neque natus
      mollitia quos rem asperiores, fuga sit aspernatur consequatur dolor.
    </p>
    </div>)
  }
  
  const Skills = () =>{
    return(
    <div>
      <h2>Skills & Languages</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Java</li>
    </ul>
    <h2>Programs</h2>
    <ul>
      <li>Adobe After Effects</li>
      <li>Blender</li>
      <li>Cinema 4D</li>
      <li>Adobe Illustrator</li>
    </ul>
    </div>)
  }
  
    const Hobbies = () =>{
    return(
    <div>
       <h2>Hobbies</h2>
    <ul>
      <li>Music Production</li>
      <li>Calisthenics</li>
      <li>Sound Synthesis</li>
    </ul>
    </div>)
  }
  const Divi = () => {
    return (<div className="line">.</div>)
  };

  return (
    <div className="main">
      <Deets></Deets>
      <br></br>
      <Divi></Divi>
      <Exper></Exper>
      <Divi></Divi>
      <Skills></Skills>
      <Divi></Divi>
      <Hobbies></Hobbies>
      <Divi></Divi>
    </div>
  );
}

export default App;
