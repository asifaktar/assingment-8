import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect( () =>{
        fetch("../../../public/allData.json")
            .then(res => res.json())
            .then(data => setGadgets(data))

    },[]);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold p-4">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-4">
                <div>
                    <div className="grid grid-cols-1 p-4 shadow-2xl rounded-2xl ">
                        <button className="text-bold  bg-gray-500 text-sm rounded-2xl text-gray-50 p-2"> Gadgets</button>
                        <button className="text-bold  bg-gray-500 p-2 text-sm rounded-2xl mt-4 text-gray-50">Laptops</button>
                        <button className="p-2 text-bold  bg-gray-500 text-sm rounded-2xl mt-4 text-gray-50">Smart Watches</button>
                        <button className="p-2 text-bold  bg-gray-500 text-sm rounded-2xl mt-4 text-gray-50">Phones</button>
                        <button className="p-2 text-bold  bg-gray-500 text-sm rounded-2xl mt-4 text-gray-50">Mack Books</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    {
                        gadgets.map(gadget =><Gadget gadget={gadget} key={gadget.id}
                        ></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;