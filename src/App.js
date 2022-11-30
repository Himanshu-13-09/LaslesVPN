import './App.css';
import Navbar from './Components/Navbar'
import img from './Images/Illustration 1.svg'
import img1 from './Images/Group 1216.svg'
import img2 from './Images/Group 1215.svg'
import img3 from './Images/Group 1217.svg'
import img4 from './Images/Illustration 2.svg'
import img5 from './Images/Group 1120.svg'
import img6 from './Images/Free.svg'
import img7 from './Images/tick.svg'
import img8 from './Images/Huge Global.svg'
import img9 from './Images/Mask Group (1).svg'
import img10 from './Images/Mask Group (2).svg'
import img11 from './Images/Mask Group (3).svg'
import img12 from './Images/Mask Group (4).svg'
import Carousel from './Components/Carousel';
import icon from './Images/Logo.svg';
import fb from './Images/Facebook.svg';
import twitter from './Images/Twitter.svg';
import ig from './Images/Instagram.svg';









function App() {
  return (
    <>
      <div className='body'>
        <Navbar />
        <div id="aboutus" >
          <div id="col-1">
            <p id="txt"><b>Want anything to be easy with LaslesVPN.</b></p>
            <p id='txt1'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button id="btn1">Get Started</button>
          </div>

          <img id="col-2" src={img} alt='' />

        </div>

        <div className='container'>
          <ul style={{ display: 'flex' }}>
            <li >
              <span><img id='icon' src={img1} /></span>
              <p id='txt2'><b>90+</b></p>
              <p id='txt3'>Users</p>
            </li>
            <li id='loc'>
              <span><img id='icon' src={img2} /></span>
              <p id='txt2'><b>30+</b></p>
              <p id='txt3'>Locations</p>
            </li>
            <li id='loc'>
              <span><img id='icon' src={img3} /></span>
              <p id='txt2'><b>50+</b></p>
              <p id='txt3'>Servers</p>
            </li>
          </ul>
        </div>

        <div id="aboutus" >
          <img id="col-3" src={img4} alt='' />

          <div id="col-4">
            <p id="txt4"><b>We Provide Many Features You Can Use</b></p>
            <p id='txt5'>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul id='list'>
              <li>
                <span><img id='chk' src={img5} /></span>
                <a id='txt6'>Powerful online protection.</a>
              </li>
              <li>
                <span><img id='chk' src={img5} /></span>
                <a id='txt6'>Internet without border.</a>
              </li>
              <li>
                <span><img id='chk' src={img5} /></span>
                <a id='txt6'>Supercharged VPN.</a>
              </li>
              <li>
                <span><img id='chk' src={img5} /></span>
                <a id='txt6'>No specific time limits.</a>
              </li>
            </ul>

          </div>
        </div>
        <center>
          <div id='plan'>
            <a id='txt7'><b>Choose Your Plan</b></a>
            <p id="txt8">Let's Choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
        </center>
        <div id='plans'>
          <div id='plan1'>
            <div id='planimg'>
              <center><img id='free' src={img6} /></center>
            </div>
            <center><h3>Free Plan</h3></center>
            <ul>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Unlimited bandwidth</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Encrypted bandwidth</a>
              </li><li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>No Trafffic logs</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Work on All Devices</a>
              </li>
            </ul>
            <center><h2 id='txt10'> Free</h2></center>
            <center><button id='select'>Select</button></center>
          </div>
          <div id='plan1'>
            <div id='planimg'>
              <center><img id='free' src={img6} /></center>
            </div>
            <center><h3>Standard Plan</h3></center>
            <ul>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Unlimited bandwidth</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Encrypted bandwidth</a>
              </li><li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Yes Trafffic logs</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Work on All Devices</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Connect Anywhere</a>
              </li>
            </ul>
            <center><h2 id='txt11'> Free</h2></center>
            <center><button id='select'>Select</button></center>
          </div>
          <div id='plan1' >
            <div id='planimg'>
              <center><img id='free' src={img6} /></center>
            </div>
            <center><h3>Premium Plan</h3></center>
            <ul>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Unlimited bandwidth</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Encrypted bandwidth</a>
              </li><li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Yes Trafffic logs</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Work on All Devices</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Connect Anywhere</a>
              </li>
              <li>
                <span><img id='chk1' src={img7} /></span>
                <a id='txt9'>Get New Features</a>
              </li>
            </ul>
            <center><h2 id='txt12'> Free</h2></center>
            <center><button id='select'>Select</button></center>
          </div>

        </div>
        <center>
          <div id='plan'>
            <a id='txt7'><b>Huge Global Network of Fast VPN</b></a>
            <p id="txt8">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
          </div>
        </center>

        <center><img id='map' src={img8} /></center>
        <div >
          <ul id='brand'>
            <li>
              <img id='bimg' src={img9} />
            </li>
            <li>
              <img id='bimg1' src={img10} />
            </li>
            <li>
              <img id='bimg' src={img11} />
            </li>
            <li>
              <img id='bimg2' src={img12} />
            </li>
          </ul>
        </div>
        <center>
          <div id='cust'>
            <a id='txt13'><b>Trusted by Thousands of Happy Customer</b></a>
            <p id="txt14">These are the stories of our customers who have joined with great pleasure when using this crazy feature.</p>
          </div>
        </center>
        <div id='carousel'>
          <Carousel />
        </div>

      </div>
      <div id='sub'>
        <div id='subtxt'>
          <h3>Subscribe Now for Get Special features!</h3>
          <p>Let's Subscribe with us and have fun.</p>
        </div>
        <div id='subbtn'>
          <button>Subscribe Now</button>
        </div>
      </div>
      <div id='footer'>
        <div id='logop'>
          <img id='footerlogo' src={icon} />
          <p id='txt15' >LaslesVPN is a private virtual network that has unique features and has high security.</p>
          <ul id='logimg'>
            <li >
              <a href='https://www.facebook.com/login/'><img src={fb} style={{ paddingLeft: '0px' }} /></a>
            </li>
            <li>
              <a href=''><img src={twitter} /></a>
            </li><li>
              <a href=''><img src={ig} /></a>
            </li>
          </ul>
          <p  id='copyright'>&copy; 2022LaslesVPN</p>
          <div id='links'>
            <ul>
              <li><h3>Product</h3></li>
              <li><a href='' ><p>Download</p></a></li>
              <li><a href='' ><p>Pricing</p></a></li>
              <li><a href='' ><p>Locations</p></a></li>
              <li><a href='' ><p>Servers</p></a></li>
              <li><a href='' ><p>Countries</p></a></li>
              <li><a href='' ><p>Blog</p></a></li>


            </ul>
            <ul>
              <li><h3>Engage</h3></li>
              <li><a href='' ><p>LaslesVPN?</p></a></li>
              <li><a href='' ><p>FAQ</p></a></li>
              <li><a href='' ><p>Tutorials</p></a></li>
              <li><a href='' ><p>About Us</p></a></li>
              <li><a href='' ><p>Prviacy Policy </p></a></li>
              <li><a href='' ><p>Term of Sevice</p></a></li>


            </ul>
            <ul  style={{ width: '160px',}}>
              <li><h3>Earn Money</h3></li>
              <li><a href='' ><p>Affilate</p></a></li>
              <li><a href='' ><p>Become Partner</p></a></li>



            </ul>
          </div>
        </div>
        <div>


        </div>

      </div>
    </>
  );
}

export default App;
