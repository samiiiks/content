
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
// import "./styles.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function App() {
  const hotelCards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"]
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"]
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"]
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"]
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "King Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"]
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Royal Suite",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)"
      ]
    }
  ];
  return (
    <div className="App">
      <Swiper
        id="main"
        pagination
        centeredSlides
        controlsProps={{
          dotsTouchable: true,
          prevPos: 'left',
          nextPos: 'right',
        }}
        spaceBetween={0}
        slidesPerView={3}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {hotelCards.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo.imageSrc}
              alt={photo.alternativeText}
              style={{ width: "500px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}