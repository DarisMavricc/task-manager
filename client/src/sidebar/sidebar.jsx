import './sidebar.css'
import icon from './image.jpg'
import { IoIosHome } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { MdAssignment } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="image-and-name">
                <div className="image">
                    <img src={icon} alt="" />
                </div>
                <div className="name">
                    <h1>Daris Mavric</h1>
                </div>
            </div>
            <div className="buttons">
                <a href="/"><div className="button">
                    <IoIosHome style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>All Tasks</p>
                </div></a>
                <a href="/completed"><div className="button">
                    <FaCheck style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Completed</p>
                </div></a>
                <a href="/important"><div className="button">
                    <CiCircleAlert style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Important</p>
                </div></a> 
                <a href="/incomplete"><div className="button">
                    <MdAssignment style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Do it now</p>
                </div></a>
            </div>
            <a href="/logout"><div className="signout">
                <FaSignOutAlt style={{width: '50px',height: '50px',color: "white"}}/>
                <p>Sign Out</p>
            </div></a>
        </div>
    )
}