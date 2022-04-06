import './App.css';
import profilePhoto from './_assets/images/profilePhoto.jpg';
import mailIcon from './_assets/images/gmail_icon.png';
import linkedInIcon from './_assets/images/linkedin_icon.png';
import githubIcon from './_assets/images/github_icon.png';
import phoneIcon from './_assets/images/phone_icon.png';
import linuxIcon from './_assets/images/linux_text_icon.png';
import windowsIcon from './_assets/images/windows_text_icon.png';
import androidIcon from './_assets/images/android_text_icon.png';
import gitIcon from './_assets/images/git_icon.png';
import vsCodeIcon from './_assets/images/vs_code_icon.png';
import mySQLIcon from './_assets/images/mysql_icon.png';
import dockerIcon from './_assets/images/docker_icon.png';
import reactIcon from './_assets/images/react_icon.png';
import androidStudioIcon from './_assets/images/android_studio_icon.png';
import virtualBoxIcon from './_assets/images/virtual_box_icon.png';
import gradleIcon from './_assets/images/gradle_icon.png';
import linkIcon from './_assets/images/link_icon.png';
import puzzleIcon from './_assets/images/puzzle_icon.png';
import gamepadIcon from './_assets/images/gamepad_icon.png';
import stocksIcon from './_assets/images/stocks_icon.png';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='left-side'>

          <div className='personal-info'>
            <div className='name'><h3><span style={{fontWeight:"normal"}}>Ioannis</span><br/><span>Fotis</span></h3></div>
            <div className='profile-photo'><img src = {profilePhoto} alt = 'Profile'/></div>
            <div className='contact-info'>
              <h3>Find me at:</h3>
              <ul>
                <li>
                  <span className='icon'><img src = {mailIcon} alt='mail'/></span>
                  <span className='text'><a href = 'mailto:giannisfotis@gmail.com'>giannisfotis@gmail.com</a></span>
                </li>
                <li>
                  <span className='icon'><img src = {linkedInIcon} alt='linkedin'/></span>
                  <span className='text'><a href = 'https://www.linkedin.com/in/john-fotis/'>linked-in/john-fotis</a></span>
                </li>
                <li>
                  <span className='icon'><img src = {githubIcon} alt='github'/></span>
                  <span className='text'><a href = 'https://github.com/john-fotis'>github/john-fotis</a></span>
                </li>
                <li>
                  <span className='icon'><img src = {phoneIcon} alt='phone'/></span>
                  <span className='text'><a href = 'tel:+306933109725'>+30 693 310 9725</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className='programming-skills'>
            <h3>Programming Skills</h3>
            <ul>
              <li>
                <span className='text'>C++, Java</span>
                <span className='progress'><div style={{width:"80%"}}/></span>
              </li>
              <li>
                <span className='text'>C, JavaScript</span>
                <span className='progress'><div style={{width:"60%"}}/></span>
              </li>
              <li>
                <span className='text'>Bash Scripting, MATLAB, ASM</span>
                <span className='progress'><div style={{width:"40%"}}/></span>
              </li>
                <li>
                <span className='text'>Python, PHP</span>
                <span className='progress'><div style={{width:"20%"}}/></span>
              </li>
            </ul>
          </div>

          <div className='operating-systems'>
            <h3>Operating Systems</h3>
            <ul>
              <li><img src = {linuxIcon} alt = 'linux'/></li>
              <li><img src = {windowsIcon} alt = 'windows'/></li>
              <li><img src = {androidIcon} alt = 'android'/></li>
            </ul>
          </div>

          <div className='tools'>
            <h3>Tools &#38; Technologies</h3>
            <ul>
              <li>
                <ul>
                  <li><img src = {gitIcon} alt = 'git' /></li>
                  <li><img src = {vsCodeIcon} alt = 'vscode' /></li>
                  <li><img src = {mySQLIcon} alt = 'mysql' /></li>
                  <li><img src = {dockerIcon} alt = 'docker' /></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><img src = {reactIcon} alt = 'react' /></li>
                  <li><img src = {androidStudioIcon} alt = 'android studio' /></li>
                  <li><img src = {virtualBoxIcon} alt = 'ansible' /></li>
                  <li><img src = {gradleIcon} alt = 'gradle' /></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='soft-skills'>
            <h3>Soft Skills</h3>
            <ul><li>Attention to detail &#8226; Analysis &#8226; Organization &#8226; Teamwork &#8226; Communication</li></ul>
          </div>

          <div className='languages'>
            <h3>Languages</h3>
            <ul>
              <li>
                <ul className='language-list'>
                  <li>Greek</li>
                  <li>English</li>
                  <li>German</li>
                </ul>
              </li>
              <li><div className='vertical-line'/></li>
              <li>
                <ul className='language-level'>
                  <li>Native</li>
                  <li>C2</li>
                  <li>B2</li>
                </ul>
              </li>
              <li className='language-level-chart'>
                <ul>
                  <li className='chart-row'>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                  </li>
                  <li className='chart-row'>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                  </li>
                  <li className='chart-row'>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle'/>
                    <span className='chart-circle' style={{background: "#fff"}}/>
                    <span className='chart-circle' style={{background: "#fff"}}/>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

        <div className='right-side'>

          <div className='section-title'>
            <div className='text'><span style={{color: "#1e6eaa"}}>Edu</span>cation</div>
            <div className='line'/>
          </div>
          <div className='section-content'>
            <div className='content-name'>
              <a href='https://www.di.uoa.gr/en'>B.Sc in Informatics and Telecommunications
                <img src = {linkIcon} alt = 'link'/>
                <span className='period'>currently</span>
              </a>
            </div>
            <div className='content-description'>National and Kapodistrian University of Athens, GR</div>
          </div>

          <div className='section-title'>
            <div className='text'><span style={{color: "#1e6eaa"}}>Pro</span>jects</div>
            <div className='line'/>
          </div>
          <div className='section-content'>
            <ul>
              <li>
                <div className='content-name'>
                  <a href='https://github.com/john-fotis/Civil-Protection'>Edge Computing in physical disaster forecasting
                    <img src = {linkIcon} alt = 'link'/>
                    <span className='period'>2022</span>
                  </a>
                </div>
                <div className='content-description'>Developed a set of android applications that work with a central server over MQTT in order to process IoT sensor data at an edge infrastructure. This analysis helps us to detect hazardous events and warn all civilians in the area.</div>
              </li>
              <li>
                <div className='content-name'>
                  <a href='https://github.com/john-fotis/Indoor-Path-Loss-Analysis'>Indoor Path Loss Analysis for wireless links
                    <img src = {linkIcon} alt = 'link'/>
                    <span className='period'>2021</span>
                  </a>
                </div>
                <div className='content-description'>Study &#38; analysis of the COST-231 multiwall propagation model. The analysis is accomplished with MATLAB in order to illustrate the link's behavior and contribute to an optimal design of indoor Femtocell Networks.</div>
              </li>
              <li>
                <div className='content-name'>
                  <a href='https://github.com/john-fotis/SysPro3'>Vaccination Monitor Web Server
                    <img src = {linkIcon} alt = 'link'/>
                    <span className='period'>2021</span>
                  </a>
                </div>
                <div className='content-description'>C++ application that implements a traveling monitor system based on vaccination records. A hands-on practice in Systems' Programming, Sockets, Threads, Server-Client and monitor-style programming.</div>
              </li>
              <li>
                <div className='content-name'>
                  <a href='https://github.com/john-fotis/OS2'>Memory Page Replacement Simulator
                    <img src = {linkIcon} alt = 'link'/>
                    <span className='period'>2020</span>
                  </a>
                </div>
                <div className='content-description'>Built an application in C, to simulate memory management in Unix Operating Systems, implementing LRU and Second Chance page-replacement algorithms.</div>
              </li>
              <li>
                <div className='content-name'>
                  <a href='https://github.com/john-fotis/AirBnB-Clone'>Airbnb Clone Web-Application
                    <img src = {linkIcon} alt = 'link'/>
                    <span className='period'>2020</span>
                  </a>
                </div>
                <div className='content-description'>Developed the front-end part for a real-estate booking website using React and JSX.</div>
              </li>
            </ul>
          </div>

          <div className='section-title'>
            <div className='text'><span style={{color: "#1e6eaa"}}>Cur</span>rently doing</div>
            <div className='line'/>
          </div>
          <div className='section-content'>
            <ul>
              <li>
                <div className='content-name'>
                  <a href='https://www.thethingsnetwork.org/docs/lorawan/what-is-lorawan/'>Working on my Thesis
                    <img src = {linkIcon} alt = 'link'/>
                  </a>
                </div>
              <div className='content-description'>In-depth analysis of range and performance matters in LPWAN Networks using LoRa and LoRaWAN technologies. The study includes a series of experiments to test out several scenarios and draw conclusions on this technology.</div>
              </li>
              <li>
                <div className='content-name'>Expanding my knowledge on Build and Deploy tools</div>
                <div div className='content-description'>Learning how to automate the deployment of my applications using Jenkins and Ansible.</div>
              </li>
            </ul>
          </div>

          <div className='section-title'>
            <div className='text'><span style={{color: "#1e6eaa"}}>Tec</span>nological interests</div>
            <div className='line'/>
          </div>
          <div className='content-description' style={{marginTop: "10px", marginLeft: "20px", marginBottom: "10px"}}>Task Automation, IoT, Wireless Networking, Network Architecture, Cyber Security, PC hardware</div>

          <div className='section-title'>
            <div className='text'><span style={{color: "#1e6eaa"}}>Hob</span>bies</div>
            <div className='line'/>
          </div>
          <div className='hobbies'>
            <ul>
              <li>
                <ul className='hobbies-icons'>
                  <li><img src = {puzzleIcon} alt = 'puzzle'/></li>
                  <li><img src = {gamepadIcon} alt = 'people'/></li>
                  <li><img src = {stocksIcon} alt = 'stocks'/></li>
                </ul>
              </li>
              <li>
                <ul className='hobbies-description'>
                  <li>Jigsaw Puzzles</li>
                  <li>Computer Games</li>
                  <li>Investing</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;