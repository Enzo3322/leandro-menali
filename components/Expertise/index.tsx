/* eslint-disable react/no-children-prop */
import ExpertiseCard, { ExpertiseCardProps } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import { Pagination } from "swiper";

const ExpertiseCardCarousel = (props: { data: ExpertiseCardProps[] }) => {
  const { data } = props;

  if (!data) return null;

  return (
    <div className={styles.container}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={20}
      >
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <ExpertiseCard
              children={card.children}
              text={card.text}
              title={card.title}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExpertiseCardCarousel;
