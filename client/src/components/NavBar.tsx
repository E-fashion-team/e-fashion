import React ,{useState}from 'react'
import '../styles/navBar.css'
import vector1 from '../images/Vector (1).svg'
import ellipse from '../images/Ellipse 258.svg'
import group from '../images/Group 48095728.svg'
import { Link } from 'react-router-dom';
interface User {
    id:number,
    email: string;
    name: string;
    password: string;
    image:string,
    dateOfBirth:string,
   
    
  }
const NavBar = () => {
    const userJSON: string | null = localStorage.getItem("user"); 
    const userParse:User = userJSON ? JSON.parse(userJSON) : null;
    const[user ,setUser] = useState<User>(userParse);
    return (
        <div className='fofo'>
        <div className='footer'>
        <div className="header">
            <div className="text-wrapper">Logo</div>
            <div className="div"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></div>
            <Link to='/NFT'><div className="text-wrapper-2">NFTs</div></Link>
            <div className="search-bar">
                <div className="inputBox_container">
                    <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                        </path>
                    </svg>
                    <input className="inputBox" id="inputBox" type="text" placeholder="Search Items, Fashion, Collection and Users" />
                </div>
            </div>
            <img className="ellipse"  src={user.image} />
            {/* <img className="img" alt="Vector" src={img} /> */}
            <div className="group">
                <Link to='/explore'><div className="text-wrapper-3">Explore</div></Link>
               
            </div>
            <Link to='/messages'><img className="group-2" alt="Group" src={group} /></Link>
            <Link to='/drops'><div className="text-wrapper-4">Drops</div></Link>
            <div className="group-3">

                {/* <img className="vector-3" alt="Vector" src={vector2} /> */}
                <div>
                    <details className="text-wrapper-3">
                        <ul>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/stats'><li><a href="#" className="Dtext-wrapper">Stats</a></li></Link>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/about'><li><a href="#" className="Dtext-wrapper-2">About Us</a></li></Link>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/studio'><li><a href="#" className="Dtext-wrapper-4">Creator Studio</a></li></Link>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/edit'><li><a href="#" className="Dtext-wrapper-5">Edit Profile</a></li></Link>
                            
                        </ul>
                    </details>
                </div>
            </div>
            <div className="frame">
                <div className="text-wrapper-5">Wallet</div>
            </div>
        </div>
    </div>
    </div>   
    )
}

export default NavBar