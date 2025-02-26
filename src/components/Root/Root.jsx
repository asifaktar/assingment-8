import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "./NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Root;