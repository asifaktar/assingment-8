import { Link } from "react-router-dom";


const Gadget = ({ gadget }) => {
    //console.log(categories)
    const { model_name, description, price, real_image_link,id } = gadget;

    // const handelCategories = () =>{
    //     // const laptopCategory = categories.filter(category => category.category == "Laptops");
    //      //console.log(laptopCategory);
    //      console.log("hi")
    //  };

    return (
        <div>
            <div className=" w-full bg-base-100 p-4 rounded-2xl  shadow-2xl">
                <figure className="justify-self-start">
                    <img className="rounded-xl"
                        src={real_image_link}
                        alt="Iphone" />
                </figure>
                <div className="py-4">
                    <h2 className="card-title ">{model_name}</h2>
                    <p className="my-2">Price: {price}.</p>
                    <div className="card-actions justify-self-start">
                        <Link to={`/gadgets/${id}`}>
                            <button className="px-2 py-1  text-sm cursor-pointer hover:bg-[#9000e2] hover:text-[13.65px] bg-[#9538E2] rounded-3xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;