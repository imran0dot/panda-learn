import Logo from "../sharedComponents/Logo";
import { BsFillTelephoneFill, BsLinkedin, BsFacebook, BsPinterest } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa'
import Fixedwidth from "../../Layouts/Fixedwidth";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer p-10 font-bold bg-[#F0F9F5]">
                <Fixedwidth>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div>
                            <Logo />
                            <p className="footer-title mt-5">
                                Expand your horizons with Panda Learning. Discover the joy of language learning through our diverse courses. Unlock a world of opportunities today!
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl mb-5">Company</span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                            <span className="text-3xl mb-4">Contact us</span>
                            <div className="footer-title mt-5">
                                <a className="link link-hover flex items-center gap-3"><BsFillTelephoneFill /> 01926629854</a>

                                <a className="link link-hover flex items-center gap-3"><FaLocationArrow /> Local and Small Business SEO | Detective SEO</a>
                            </div>
                            <div className="flex gap-2 text-3xl">
                                <a 
                                href="https://www.facebook.com/detectiveseo1/"
                                className="link link-hover footer-title"><BsFacebook /></a>

                                <a 
                                href="https://www.linkedin.com/in/detectiveseo/"
                                className="link link-hover footer-title"><BsLinkedin /></a>

                                <a 
                                href="https://www.pinterest.com/tentclubs/"
                                className="link link-hover footer-title"><BsPinterest /></a>
                            </div>

                        </div>
                    </div>
                </Fixedwidth>
            </div>


            <div className="text-center bg-[#2E836F] text-white">
                <p>©Foreigner Panda {year} | this site created by <a target="_blank" href="https://detectiveseo.com">Detective SEO</a></p>
            </div>
        </footer>
    );
};

export default Footer;