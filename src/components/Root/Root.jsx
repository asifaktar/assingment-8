import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { createContext, useState } from "react";

export const AddContext = createContext();
export const AddLoveContext = createContext();
export const purchaseData = createContext();

const Root = () => {
    const [addToCart, setAddToCart] = useState(0)
    const [wishList, setWishList] = useState(0)
    return (
        <purchaseData.Provider value={[]}>
            <AddLoveContext.Provider value={[wishList, setWishList]}>
                <AddContext.Provider value={[addToCart, setAddToCart]}>
                    <div>
                        <div className="w-11/12 mx-auto">
                            <NavBar></NavBar>
                        </div>
                        <Outlet></Outlet>
                        <Footer></Footer> 
                    </div>
                </AddContext.Provider>
            </AddLoveContext.Provider>
        </purchaseData.Provider>
    );
};

export default Root;