// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Idendidade visual única pra você e sua empresa.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Interfaces responsivas com foco na experiência do usuário.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desenvolvimento',
    description: 'Desenvolvimento de aplicações e banco de dados.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Estratégias de produção de conteúdo para captar clientes.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Otimizações e aperfeiçoamentos no SEO da aplicação.',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper'

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-violet-500 mb-4'>{item.icon}</div>

              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>

              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-violet-500 transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
