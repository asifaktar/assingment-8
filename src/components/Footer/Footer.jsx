

const Footer = () => {
    return (
        <div>
            <div className="bg-neutral text-center py-4">
                <h2 className="text-3xl font-bold mb-4">Gadget Heaven</h2>
                <p className="text-sm">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer  bg-neutral text-neutral-content justify-between flex p-10">
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;