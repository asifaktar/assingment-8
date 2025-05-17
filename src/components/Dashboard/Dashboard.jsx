import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utiliti/AdToDb";

import DashBoards from "../DashBords/DashBords";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PiSlidersBold } from "react-icons/pi";

const Dashboard = () => {

    const AllData = useLoaderData();

    const [readList, setReadList] = useState([])
    console.log(readList)
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, "hi",)
        console.log(storedReadListInt)
        const readItem = AllData.filter(item => storedReadListInt.includes(item.id))

        //const readItem = AllData
        console.log(readItem)
        setReadList(readItem)

    }, [AllData]);


    return (
        <div>
            <div className="  text-center">
                <div className="px-4 py-6 bg-[#9000e2]">
                    <h3 className="text-[#ffff] text-3xl font-bold">Dashboard</h3>
                    <p className="text-sm mt-4 font-medium">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
                <Tabs>
                    <div className="bg-[#9000e2] -mt-4  py-8 justify-items-center">
                        <TabList className="flex">
                            <Tab className="border-none font-semibold  px-6 py-1 rounded-2xl mx-4 cursor-pointer">Cart</Tab>
                            <Tab className="border-none font-semibold  px-6 py-1 rounded-2xl mx-4 cursor-pointer">Wishlist</Tab>
                        </TabList>
                    </div>
                    <TabPanel className="w-11/12 mx-auto">
                        <div className="mt-4 flex justify-between">
                            <h2 className=" font-bold text-lg text-[#9538E2]">Cart</h2>
                            <div className="flex gap-2">
                                <h4 className="font-medium text-[#9538E2]">Total cost: 9999</h4>
                                <button className="inline-flex text-xs font-semibold text-[#9538E2] px-4 py-1 rounded-2xl mx-2 cursor-pointer border-1 gap-1 self-item-end hover:bg-[#9538E2] hover:text-white hover:border-none">Sort by Price <a></a><PiSlidersBold /></button>
                                <button className="text-xs font-semibold text-[#9538E2] px-4 py-1 rounded-2xl mx-2 cursor-pointer border-1 hover:bg-[#9538E2] hover:text-white hover:border-none">Purchase</button>
                            </div>
                        </div>
                        {
                            readList.map(Product => <DashBoards key={Product.id} Product={Product}></DashBoards>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Wishlist content is upcoming.....</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;