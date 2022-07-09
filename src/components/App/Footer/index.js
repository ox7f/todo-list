import { Footer as DaisyFooter } from "react-daisyui";

export default function Footer() {
    return (
        <div>
            <DaisyFooter className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>&copy; Copyright 2022</p>
                </div>
            </DaisyFooter>
        </div>
    );
}
