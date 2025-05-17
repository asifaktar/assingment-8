import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { addToStoredReadList } from "../../Utiliti/AdToDb";
import { useContext } from "react";
import { AddContext } from "../Root/Root";
// import { useContext } from "react";
// import { AddContext, AddLoveContext } from "../Root/Root";

const GadgetDetail = () => {

    // const [money, setMoney] = useContext(AddContext);
    // const [love, setLove] = useContext(AddLoveContext)


    const { id } = useParams();
    const gadgetId = parseInt(id);

    const data = useLoaderData();
    
    const gadget = data.find(gadget => gadget.id === gadgetId);

    const { stock, description, specifications, rating, real_image_link, model_name, price, id:AddToCartId } = gadget;

    //const navigate = useNavigate()
    const [addToCart, setAddToCart] = useContext(AddContext);
   // console.log(addToCart)
    const handelAdToCart = (id) =>{
        // navigate(id);
        
       setAddToCart(addToCart + id)
       console.log("Click write now.", id,);

        addToStoredReadList(id)
    }

    return (
        <div>
            <div className="mb-16">
                <div className="bg-[#9538E2] pt-4 pb-46">
                    <h2 className="text-center text-3xl font-bold">Product Details</h2>
                    <p className="text-center py-4 text-sm md:w-6/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 gap-4 w-8/12  mx-auto rounded-2xl p-4 border -mt-42">
                    <div className="w-full h-full object-cover">
                        <img className="rounded-xl" src={real_image_link} alt="" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-gray-800 text-xl font-bold">{model_name}</h2>
                        <h3 className="text-[#09080FCC] font-medium ">Price: {price}</h3>
                        <button className="rounded-xl bg-[#b6eda2] font-semibold px-2 text-xs border text-[#309b09] ">{stock}</button>
                        <p className=" text-[#09080F99] font-sm">{description}</p>
                        <h4 className="text-[#09080F] font-medium">Specification</h4>
                        <div className="ml-4 text-[#09080F99] font-medium text-xs">
                            <p>1: {specifications.display}</p>
                            <p>2: {specifications.processor}</p>
                            <p>3: {specifications.ram_rom}</p>
                            <p>4: {specifications.storage}</p>
                        </div>
                        <div className="">
                            <h4 className="text-[#09080F] font-medium">Rating:</h4>
                            <div className="ml-4 flex gap-2 items-center">
                                <div className="rating rating-xs flex ml-">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-5"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className="text-gray-600">{rating}</p>
                            </div>
                        </div>
                        <div className="mt-1 flex gap-4 items-center">
                            <button onClick={() => handelAdToCart(AddToCartId)} className="bg-[#9538E2] flex items-center gap-2 cursor-pointer hover:text-[11.90px] hover:bg-[rgb(144,0,226)] justify-items-center font-medium px-2 py-1 rounded-xl text-xs">
                                <p>Add To Cart</p>
                                <a><FiShoppingCart/></a>
                            </button>
                            <div className="border  text-[#9000e2] hover:text-white rounded-full hover:text-[15 px] hover:bg-[#9000e2]     cursor-pointer px-1">
                                
                                <button className="cursor-pointer"><CiHeart /></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;