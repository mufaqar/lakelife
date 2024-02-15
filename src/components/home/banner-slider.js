"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import Link from "next/link";
import { Posts } from '@/const/posts'

const BannerSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1)
    const [slider1, setSlider1] = useState(null);

    useEffect(() => {
        setNav1(slider1);
    }, [slider1]);

    const settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
    };

    return (
        <div className="Hero">
            <div className="w-full">
                <Slider {...settings}
                    asNavFor={nav1}
                    ref={(slider) => setSlider1(slider)}
                >
                    {Posts?.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`relative md:min-h-screen md:max-h-screen min-h-[450px] h-full ${currentSlide === idx ? "active" : null}`}
                            onClick={() => {
                                slider1?.slickGoTo(idx)
                            }}>
                            <Image src={item?.img} alt={item.alt} width={735} height={640} className='w-full md:min-h-screen min-h-[450px] h-full object-cover' />
                            <div className="absolute top-[25%] -translate-y-[25%] md:left-[49%] md:w-[40%] w-full md:px-0 px-5">
                                <p className="text-sm font-semibold text-white mb-2">
                                    {item?.categ}
                                </p>
                                <h1 className="md:text-5xl text-xl font-bold text-white">
                                    {item?.title}
                                </h1>
                                <p className="text-sm font-medium text-white my-6">
                                    {item?.excerpt}
                                </p>
                                <Link href={item?.link} className="text-sm font-bold text-primary text-center uppercase bg-white hover:bg-secondary hover:text-white flex items-center justify-center px-4 py-3.5 max-w-[360px] w-full rounded">
                                    Read the Full Story
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="thumb-wrapper absolute md:-bottom-28 -bottom-16">
                    {Posts?.map((item, idx) => (
                        <div
                            key={item.id}
                            className={currentSlide === idx ? "active" : null}
                            onClick={() => {
                                slider1?.slickGoTo(idx)
                            }}>
                            <Image src={item?.img} alt={item.alt} width={180} height={180} className='' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;