import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { AddContext } from "../Root";

const NavBar = () => {

    //const navigate = useNavigate(1)
    
    const Links = <>

            <li className="font-bold"><NavLink to="/">Home</NavLink></li>
            {<li><NavLink to="/dashBoard">DashBoard</NavLink></li>}
        </>
    
        const [addToCart] = useContext(AddContext);
        console.log(addToCart)
        
    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-4 relative">
                        <a className=" p-1 rounded-full  hover:text-lg  border  text-[#9000e2]  hover:text-white hover:text-[15 px] hover:bg-[#9000e2]     cursor-pointer px-1"><MdOutlineShoppingCart /></a>
                        {
                            addToCart ? <p className="absolute text-xs mb-7 mr-14 text-white">{addToCart}</p>
                            : ""
                        }
                        {/* <h1>{addToCart}</h1> */}
                        <a className="cursor-pointer border hover:text-lg p-1 rounded-full text-[#9000e2] hover:text-white hover:text-[15 px] hover:bg-[#9000e2]">
                            <FaRegHeart />
                        </a>
                        {/* {
                            love ? <p className="absolute text-xs mb-7 mr-14 text-white">{love}</p>
                            : ""
                        } */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;