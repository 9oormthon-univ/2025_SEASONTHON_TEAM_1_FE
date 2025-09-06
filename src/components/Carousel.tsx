import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type CarouselItem = {
  id: string
  title: string
  summary: string
}

const Carousel = ({ items }: { items: CarouselItem[] }) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {items.map((it) => (
          <SwiperSlide key={it.id}>
            <div className="slide">
              <div className="media" />
              <div className="slide-body">
                <h3 className="title">{it.title}</h3>
                <p className="summary">{it.summary}</p>
                <a className="more" href="#">자세히 보기</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Carousel


