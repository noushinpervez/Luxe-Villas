import { Parallax, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper
            style={ {
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            } }
            modules={ [Parallax, Autoplay, Navigation, Pagination] }
            speed={ 1000 }
            parallax={ true }
            autoplay={ {
                delay: 5000,
                disableOnInteraction: false,
            } }
            rewind={ true }
            navigation={ true }
            pagination={ { clickable: true } }
            className="mySwiper"
        >

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to bottom, rgba(2,3,2,1), rgba(2,3,2,0.6), rgba(2,3,2,0)), url(./1.jpg)' } }>
                <div className="tracking-widest flex justify-center items-center flex-col h-full text-center p-[10%] lg:w-3/5 mx-auto">
                    <div className="text-2xl lg:text-4xl mb-6" data-swiper-parallax="-300">
                        Welcome to the most desirable address in Dhaka
                    </div>
                    <div className="text-lg lg:text-2xl" data-swiper-parallax="-100">
                        A never-seen-before, green oasis in the center of Dhaka
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to bottom, rgba(2,3,2,1), rgba(2,3,2,0.6), rgba(2,3,2,0)), url(./2.jpg)' } }>
                <div className="tracking-widest flex justify-center items-center flex-col h-full text-center p-[10%] lg:w-3/5 mx-auto">
                    <div className="text-2xl lg:text-4xl mb-6" data-swiper-parallax="-300">
                        Havens of outstanding style, luxurious spaces to call your own
                    </div>
                    <div className="text-lg lg:text-2xl" data-swiper-parallax="-100">
                        A beautiful luxurious life of unparalleled wellbeing at Luxe Villas
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to bottom, rgba(2,3,2,1), rgba(2,3,2,0.6), rgba(2,3,2,0)), url(./3.jpg)' } }>
                <div className="tracking-widest flex justify-center items-center flex-col h-full text-center p-[10%] lg:w-3/5 mx-auto">
                    <div className="text-2xl lg:text-4xl mb-6" data-swiper-parallax="-300">
                        Organic, ecological, and inspiringly green
                    </div>
                    <div className="text-lg lg:text-2xl" data-swiper-parallax="-100">
                        Once in a lifetime moment await
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    );
};

export default Slider;