// AboutMe.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes para las tarjetas
import CDMXImage from "../assets/images/cdmx.svg";
import F1Image from "../assets/images/f1.svg";
import FriendsImage from "../assets/images/friends.svg";
import ConcertsImage from "../assets/images/concerts.svg";
import CatLoverImage from "../assets/images/cat-lover.svg";
import MoviesImage from "../assets/images/movies.svg";
import EngagementImage from "../assets/images/engagement.svg";
import CodingImage from "../assets/images/coding.svg";
import TravelImage from "../assets/images/travel.svg";

const About = () => {
    const { t } = useTranslation();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    const cards = [
        { title: t("aboutCard1Title"), description: t("aboutCard1Description"), image: CDMXImage },
        { title: t("aboutCard2Title"), description: t("aboutCard2Description"), image: F1Image },
        { title: t("aboutCard3Title"), description: t("aboutCard3Description"), image: FriendsImage },
        { title: t("aboutCard4Title"), description: t("aboutCard4Description"), image: ConcertsImage },
        { title: t("aboutCard5Title"), description: t("aboutCard5Description"), image: CatLoverImage },
        { title: t("aboutCard6Title"), description: t("aboutCard6Description"), image: MoviesImage },
        { title: t("aboutCard7Title"), description: t("aboutCard7Description"), image: EngagementImage },
        { title: t("aboutCard8Title"), description: t("aboutCard8Description"), image: CodingImage },
        { title: t("aboutCard9Title"), description: t("aboutCard9Description"), image: TravelImage },
    ];

    return (
        <section
            id="about"
            className="bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white py-20 transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-12">
                    {t("about")}
                </h2>
                <p className="text-lg text-center text-gray-800 dark:text-white mb-12 px-4">
                    {t("aboutDescription")}
                </p>

                <Slider {...sliderSettings}>
                    {cards.map((card, index) => (
                        <div key={index} className="px-4 pb-8 mt-8">
                            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg p-6 text-left transition-transform duration-300 hover:scale-105">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                                    {card.title}
                                </h3>
                                <p className="text-gray-800 dark:text-gray-100 mb-4">
                                    {card.description}
                                </p>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-25 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                <style>
                    {`
                        .slick-dots li button:before {
                            color: #60a5fa !important;
                            opacity: 0.5 !important;
                        }
                        .slick-dots li.slick-active button:before {
                            color: #007AFF !important;
                            opacity: 1 !important;
                        }
                        .dark .slick-dots li button:before {
                            color: #FF9500 !important;
                            opacity: 0.5 !important;
                        }
                        .dark .slick-dots li.slick-active button:before {
                            color: #FF9500 !important;
                            opacity: 1 !important;
                        }
                    `}
                </style>
            </div>
        </section>
    );
};

export default About;
