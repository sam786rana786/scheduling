import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-col text-white h-[44vh] bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="font-bold text-3xl">
          Scheduling and Booking Appointments Made Easy
        </div>
        <p className="mt-2 text-center">
          An app that allows you to schedule and book appointments with ease.
        </p>
        <div className="mt-4">
          <Link href="/schedule">
            <a className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start Here
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="flex justify-center items-center flex-col text-black py-10">
        <h2 className="font-bold text-2xl mb-4">Features</h2>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Easy scheduling and booking</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Schedule and book appointments with ease.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Automated reminders</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get automated reminders for your appointments.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customizable appointment types</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Customize your appointment types as needed.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Integration with calendars</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Integrate with your favorite calendars.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="flex justify-center items-center flex-col text-black py-10 bg-gray-100">
        <h2 className="font-bold text-2xl mb-4">Testimonials</h2>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <p className="italic">&qout;This app has made scheduling so much easier!&qout; - User A</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <p className="italic">&qout;I love the automated reminders feature.&qout; - User B</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}