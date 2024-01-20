import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/Auth";
import axios from "axios";

export const Logout = () => {
    const navigate = useNavigate();
    const {currentUser,setCurrentUser} = useContext(AuthContext);

    useEffect(() => {
        const deleteCookie = axios.post('http://localhost:8080/api/logout',{ withCredentials: true });
        if(deleteCookie) {
            localStorage.clear();
        }
        setCurrentUser(null)
        navigate('/login');
    },[]);
    return (
        <div className="logout">
        </div>
    )
}