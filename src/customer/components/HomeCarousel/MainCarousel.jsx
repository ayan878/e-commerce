
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = [
    <div className="item" key="1" data-value="1">
      1
    </div>,
    <div className="item" key="2" data-value="2">
      2
    </div>,
    <div className="item" key="3" data-value="3">
      3
    </div>,
    <div className="item" key="4" data-value="4">
      4
    </div>,
    <div className="item" key="5" data-value="5">
      5
    </div>,
  ];

  return (
    <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" />
  );
};

export default MainCarousel;
