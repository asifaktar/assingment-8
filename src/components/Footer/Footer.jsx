

const Footer = () => {
    return (
        <div>
            <div className="bg-neutral text-center py-4">
                <h2 className="text-3xl font-bold mb-4">Gadget Heaven</h2>
                <p className="text-sm">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer lg:px-60 bg-neutral text-neutral-content justify-between flex p-10">
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover hover:text-gray-50 hover:text-[15px]">Products Support</a>
                    <a className="link link-hover hover:text-[15px]">Order Tracking</a>
                    <a className="link link-hover hover:text-gray-50 hover:text-[15px]">Shipping & Delivery</a>
                    <a className="link link-hover hover:text-gray-50 hover:text-[15px]">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover hover:text-[15px]">About Us</a>
                    <a className="link link-hover hover:text-[15px]">Careers</a>
                    <a className="link link-hover hover:text-[15px]">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover hover:text-[15px]">Terms of Service</a>
                    <a className="link link-hover hover:text-[15px]">Privacy policy</a>
                    <a className="link link-hover hover:text-[15px]">Cookie policy</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;