import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="max-w-screen-3xl mx-auto py-10 px-8 flex justify-between items-center font-montserrat">
            <div className="text-font-secondary">
                <h1 className="font-pacifico text-2xl">Dea Youlanda</h1>
                <div className="flex flex-col">
                    <a href="">
                        <button className="flex flex-row items-center gap-2">
                            <FaInstagram />
                            <h1>Connect with me on Instagram</h1>
                        </button>
                    </a>
                    <a href="">
                        <button className="flex flex-row items-center gap-2">
                            <FaLinkedin />
                            <h1>Connect with me on LinkedIn</h1>
                        </button>
                    </a>
                </div>
            </div>
            <div className="text-font-secondary">
                <h1 className="font-pacifico text-3xl">Thanks</h1>
            </div>
            <div className="text-font-secondary">
                <h1>
                    © Copyright {new Date().getFullYear()} | Made with love ❤
                </h1>
            </div>
        </footer>
    );
}
