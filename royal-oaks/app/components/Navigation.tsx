import "../styles/components/Navigation.scss";
import Image from "next/image";
import { Cormorant_SC, Plus_Jakarta_Sans } from "next/font/google";
import {PiListLight} from "react-icons/pi";

export const cormorantSC = Cormorant_SC({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-cormorant-sc',
    weight: "600"
});

export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-plus-jakarta-sans',
});

const Navigation = () => {
    return (
        <nav>
            <div className="brand_logo">
                <Image
                    src="/images/brand_logo.png"
                    alt={"brand logo"}
                    width={50}
                    height={50}
                />
                <div className={`${cormorantSC.variable} ${plusJakartaSans.variable} wrapper-texts`}>
                    <h1>Royal Oak</h1>
                    <h2>Properties</h2>
                </div>
            </div>
            <div className="wrapper-menu">
                <PiListLight />
            </div>
        </nav>
    );
};

export default Navigation;
