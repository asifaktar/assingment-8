
import { useContext } from "react";
import { AddContext } from "../Root/Root";


import { AiOutlineCloseCircle } from "react-icons/ai";


const DashBoards = ({ Product }) => {
    const { price, model_name, description, real_image_link } = Product;
    
    const [addToCart, setAddToCart] = useContext(AddContext);

    setAddToCart()

    console.log(Product);
    return (
        <div>

            <div className="my-4">
                <div className="flex my-4 px-4 rounded-xl gap-4 text-left bg-[#ffff]">
                    <img className="w-[110px] my-4 rounded-2xl " src={real_image_link} alt="Product image" />
                    <div className="flex justify-between py-4">
                        <div>
                            <h2 className="text-xl font-bold text-[#09080F]">{model_name}</h2>
                            <p className="text-xs my-1 text-[#09080F99] font-medium">{description}</p>
                            <h4 className="font-medium text-[#09080FCC]">Price: $ {price}</h4>
                        </div>
                        <div className="text-red-400">
                        <a className=" font-bold text-3xl text-end hover:cursor-pointer"><AiOutlineCloseCircle /></a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoards;