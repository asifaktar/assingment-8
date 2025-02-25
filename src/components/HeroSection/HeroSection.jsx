import img from "./../../../public/banner.jpg"

const HeroSection = () => {
    return (
        <div>
            <div className="-mt-18 rounded-lg text-center pb-30 bg-[#9538E2]">
                <h2 className="px-4 pt-20 text-3xl font-bold text-[#FFFFFF]">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className=" p-5 text-sm">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="hover:bg-gray-300 text-[#9538E2] bg-gray-50 cursor-pointer p-2 my-4  rounded-lg font-bold">Shop Now</button>
            </div>
            <div className="-mt-25 justify-items-center ">
                <img className=" max-w-8/12 object-cover rounded-lg" src={img} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;