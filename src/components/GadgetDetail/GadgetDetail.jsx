import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetail = () => {

     const {id} = useParams();
     const gadgetId = parseInt(id);

     const data = useLoaderData();
        //console.log(data)
    
    const gadget = data.find(gadget => gadget.id === gadgetId);

    const { stock, description, specifications, rating, real_image_link, model_name, price} = gadget;
    
    console.log(specifications.ram_rom)

    return (
        <div>
            <div>
                <div className="bg-[#9538E2] pt-4 pb-46">
                    <h2 className="text-center text-3xl font-bold">Product Details</h2>
                    <p className="text-center py-4 text-sm md:w-6/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 gap-8 w-8/12  mx-auto rounded-2xl p-4 border -mt-42">
                    <div className="w-full h-full object-cover">
                        <img className="rounded-xl" src={real_image_link} alt="" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-gray-800 text-xl font-bold">{model_name}</h2>
                        <h3 className="text-[#09080FCC] font-medium ">Price: {price}</h3>
                        <button className="rounded-xl bg-[#b6eda2] px-2 border text-[#309b09] ">{stock}</button>
                        <p className=" text-[#09080F99] font-sm">{description}</p>
                        <h4 className="text-[#09080F] font-medium">Specification</h4>
                        <div className="ml-4 text-[#09080F99] font-sm text-sm">
                            <p>1: {specifications.display}</p>
                            <p>2: {specifications.processor}</p>
                            <p>3: {specifications.ram_rom}</p>
                            <p>4: {specifications.storage}</p>
                        </div>
                        <div>
                            <h4 className="text-[#09080F]">Rating <br />{rating}</h4>
                        </div>
                        <div>
                            hi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;