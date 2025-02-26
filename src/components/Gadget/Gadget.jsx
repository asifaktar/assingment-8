import { Link } from "react-router-dom";


const Gadget = ({ gadget }) => {

    const { model_name, description, price, real_image_link,id } = gadget;

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
                            <button className="btn btn-primary bg-[#9538E2] rounded-3xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;