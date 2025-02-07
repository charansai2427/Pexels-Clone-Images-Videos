import { IoIosNotifications } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { AiOutlinePlaySquare } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdMoreHoriz } from "react-icons/md"
import './styles/navbar.css'
import { useRef } from 'react';



const Navbar = ({ setState }) => {
  const searchRef = useRef(null);

  return (
    <div className='navBar'>
      <div className="nav-container">

        <div className='nav-left'>
          <img className="logo" src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png" alt="logo" />
          <h2 className='pexel1'>Pexels</h2>
        </div>
        <div className="nav-right">
          <div class="dropdown">
            <p class="dropbtn">Explore </p>
            <div class="dropdown-content">
              <a href="#">Discover Photos</a>
              <a href="#">Popular Searches</a>
              <a href="#">LeaderBoard</a>
              <a href="#">Challenges</a>
              <a href="#">Free Vedios</a>
              <a href="#">Pexels Blog</a>
            </div>

          </div>
          <h4 className="license">License</h4>
          <div className='bell'>
            <IoIosNotifications className="notification" />
          </div>
          <div className='profile'>
            <BsPersonCircle className='profile1' />
            <div className="dawn">
              <p className="downbtn">...</p>
              <div className="drop-content">
                <a href="#">Your Profile</a>
                <a href="#">Your Collections</a>
                <a href="#">Settings</a>
                <a href="#">Change Language</a>
                <a href="#">Logout</a>
                <hr style={{color:'gray', width: "11em"}}/>
                <a href="#">Image & Vedios API</a>
                <a href="#">Apps & Plugins</a>
                <a href="#">FAQ</a>
                <a href="#">Partnerships</a>
                <a href="#">Imprint & Terms</a>
                <div className='icons'>
                  <BiLogoFacebook />
                  <AiOutlineTwitter />
                  <AiOutlineInstagram />
                  <BiLogoPinterestAlt />
                  <BiLogoYoutube />
                </div>
              </div>
            </div>
          </div>
          <h3 className='upload'>Upload</h3>
        </div>



      </div>
      <div className='titles'>
        <h1 className='title'>The best free stock photos, royalty free </h1>
        <h1 className='title'>images & videos shared by creators.</h1>
      </div>
      <div className='search'>
        <div className='drag'>
          <details>
            <summary>More</summary>
            <ul>
              <li>Photos</li>
              <li>Videos</li>
            </ul>
          </details>
        </div>
        <div>
          <input className='find' type='text' placeholder='Search for free Photos' ref={searchRef}></input>
        </div>
        <div>
          <BiSearchAlt2 className="icon" style={{ colors: 'gray' }} onClick={() => setState(searchRef.current.value)} />
        </div>
      </div>
      <div className='trends'>
        <h4>Trending:</h4>
        <p><span className='am'>american flag,</span><span className='jl'> 4th of july, </span><span className='fs'>fireworks,</span><span className='se'>space,</span><span className='sy'>sky</span></p>

        <MdMoreHoriz className='more' />
      </div>

      <div class="container teal borderYtoX">
        <a>Home</a>
        <a>Videos </a>
        <a>Leaderboard</a>
        <a>Challenges</a>
      </div>


      <div className='head'>
        <h2>Free Stock Photos</h2>
      </div>
      <div>
        
      </div>

    </div>

  )

}


export default Navbar;
