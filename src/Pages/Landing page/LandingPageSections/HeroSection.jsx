import { NavLink } from "react-router";
import { MainButton } from "../../../web Components/Buttons/MainButton";
import { useEffect, useState } from "react";

const HeroSection = ({ bg_link, heading, para, button_text, buttonNone, height }) => {
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        setBackgroundImage("low-quality-placeholder.jpg");

        const img = new Image();
        img.src = bg_link;
        img.onload = () => setBackgroundImage(img.src);
    }, [bg_link]);

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: height || "100vh",
                minHeight: "500px", // Prevents layout shift
            }}
            className="w-full mb-16 relative z-10 flex justify-center flex-col bg-cover bg-center before:absolute before:z-20 before:h-full before:w-full before:bg-black before:opacity-50"
        >
            <div className="flex flex-col mt-10 ml-10 max-w-2xl">
                <h1 className="md:text-6xl text-4xl font-extrabold font-sans text-white relative z-20">
                    {heading}
                </h1>
                <p className="md:text-2xl text-[1rem] font-medium font-sans pt-10 pb-10 text-white relative z-20">
                    {para}
                </p>
                {!buttonNone && (
                    <NavLink to="/products">
                        <MainButton text={button_text} />
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default HeroSection