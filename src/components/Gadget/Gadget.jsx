

const Gadget = ({ gadget }) => {

    const { model_name, description, price, real_image_link } = gadget;

    return (
        <div>
            <div className=" bg-base-100 p-6 rounded-2xl w-76 shadow-2xl">
                <figure className="justify-self-start">
                    <img className="rounded-2xl"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="py-4">
                    <h2 className="card-title ">{model_name}</h2>
                    <p className="my-2">Price: {price}</p>
                    <div className="card-actions justify-self-start">
                        <button className="btn btn-primary rounded-3xl">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;