import './sidebar.css'
import icon from './image.jpg'
import { IoIosHome } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { MdAssignment } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

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
                <div className="button">
                    <IoIosHome style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>All Tasks</p>
                </div> 
                <div className="button">
                    <FaCheck style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Completed</p>
                </div> 
                <div className="button">
                    <CiCircleAlert style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Important</p>
                </div> 
                <div className="button">
                    <MdAssignment style={{width: '50px',height: '50px',color: "white"}}/>
                    <p>Do it now</p>
                </div>
            </div>
            <div className="signout">
                <FaSignOutAlt style={{width: '50px',height: '50px',color: "white"}}/>
                <p>Sign Out</p>
            </div>
        </div>
    )
}