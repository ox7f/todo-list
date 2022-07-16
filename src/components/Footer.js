import {
    Footer as DaisyFooter
} from "react-daisyui";

const Footer = () => {
    return (
        <DaisyFooter className="absolute inset-x-0 bottom-0 h-16 footer footer-center text-base-content p-4 bg-base-300">
            <div>
                <p>Copyright &copy; 2022 - All rights reserved</p>
            </div>
        </DaisyFooter>
    );
}

export default Footer;