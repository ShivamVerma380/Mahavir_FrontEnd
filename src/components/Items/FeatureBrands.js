import { Card } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const FeatureBrands = () => {
    return (
        <div>
            <h3 className="hometitle" style={{ textAlign: "left", marginTop: 20, marginLeft: 20 }}>Featured Brands</h3>
            <span section-separator section-separator-dk-blue></span>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    700: {
                        slidesPerView: 6,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1647245650/Croma%20Assets/CMS/Homepage%20Banners/Highlights/HP_PB_522x450_Air-Conditioners_14March2022_cav3zb.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1655110272/Croma%20Assets/CMS/Homepage%20Banners/HP%20Banners%2013-06/HP_PB_522x450_Audio_Products_13June2022_eb92mw.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1654072131/Croma%20Assets/CMS/Homepage%20Banners/Popular%20Brands/HP_PB_522x450_Personal-Grooming_31May2022_vuc6zi.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652688877/Croma%20Assets/CMS/Homepage%20Banners/HP_PB_522x450_Boat-Smart-Watches_16May2022_lbvxsl.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652191395/Croma%20Assets/CMS/Homepage%20Banners/Popular%20Brands/HP_PB_522x450_HP-Laptop-_-Computer-Accessories_10May2022_jvr2ax.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1653299857/Croma%20Assets/CMS/Homepage%20Banners/New%20Campaign/HP_PB_522x450_Sony-Great-Summer-Sale_23May2022_ufm8el.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{ width: '25rem' }} className="mb-2">
                        <Card.Img variant="top" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1655110274/Croma%20Assets/CMS/Homepage%20Banners/HP%20Banners%2013-06/HP_PB_522x450_Coolers_13June2022_mnvmtf.png/mxw_2048,f_auto" />
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
export default FeatureBrands;














