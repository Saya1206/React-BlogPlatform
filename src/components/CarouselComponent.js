import React from "react";
import "../styles/category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export const category = [
  {
    id: 1,
    category: "Life",
    title: "Stay Calm And Surf",
    cover: "../images/category/category1.jpg",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Becoming a Dragonfly",
    cover: "../images/category/category2.jpeg",
  },
  {
    id: 3,
    category: "Travel",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/category3.jpg",
  },
  {
    id: 4,
    category: "Sport",
    title: "Stay Calm And Surf",
    cover: "../images/category/category4.jpg",
  },
  {
    id: 5,
    category: "Fun",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/category5.jpg",
  },
  {
    id: 6,
    category: "Health",
    title: "Becoming a Dragonfly",
    cover: "../images/category/category6.jpeg",
  },
  {
    id: 7,
    category: "Business",
    title: "Stay Calm And Surf",
    cover: "../images/category/category7.jpg",
  },
  {
    id: 8,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "../images/category/category8.jpg",
  },
];

const SampleNextArrow = (props) => {
  const { onClick } = props;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div
      className="control-btn"
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-label="Next Slide"
      onKeyDown={handleKeyDown} // Handle keyboard event
    >
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div
      className="control-btn"
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-label="Previous Slide"
      onKeyDown={handleKeyDown} // Handle keyboard event
    >
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {category.map((item) => (
              <div className="boxs" key={item.id}>
                <div className="box">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="category-image"
                  />
                  <div className="overlay">
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CarouselComponent;
