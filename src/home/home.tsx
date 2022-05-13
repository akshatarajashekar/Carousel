import "./home.scss";
import CarouselSlider from '../carousel/carousel';
import { CarouselListType } from "../carousel/types";

export const sliderImage: CarouselListType[] = [
  {
    title: "blueberries",
    imgPath: "blueberries.jpg",
  },
  {
    title: "berries",
    imgPath: "berries.jpg",
  },
  {
    title: "autumn",
    imgPath: "autumn.jpg",
  },
  {
    title: "benches",
    imgPath: "benches.jpg",
  },
  {
    title: "cherry_blossoms",
    imgPath: "cherry_blossoms.jpg",
  },
  {
    title: "flower",
    imgPath: "flower.jpg",
  },
];

const Home = () => {
  const cssPrefix = 'homeStyle';
  return (
    <div>
      <div className={`${cssPrefix}__carouselContainer`}>
          <CarouselSlider
            data={sliderImage}
            slides={5}
          ></CarouselSlider>
          </div>
    </div>
  );
};
export default Home;
