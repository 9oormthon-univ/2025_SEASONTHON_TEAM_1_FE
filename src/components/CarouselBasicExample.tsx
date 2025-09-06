import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const CarouselBasicExample = () => {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
      {[1,2,3].map((n) => (
        <SwiperSlide key={n}>
          <div style={{ height: 240, background: '#ddd', borderRadius: 12 }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselBasicExample


