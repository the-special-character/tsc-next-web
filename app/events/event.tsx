import '@/styles/event.css';
import React from 'react';
import Image from 'next/image';
import CalendarSvg from '@/public/icons/calendar.svg';
import Icon from '@/ui/Icon';
import Card from '@/ui/Card';

type Props = {};

// const data = {
//   // isHorizontal: false,
//   // chip_align: 'left',
//   image_url:
//     'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
//   heading: 'Graphic Design 101',
//   time: '8hr 12m',
//   rate: '99.00',
//   publishedAt: {
//     month: 'August',
//     day: '11',
//     year: '2022'
//   },
//   // description:
//   //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, corrupti, eius quae accusantium alias eaque facere voluptatum aliquid fugit, harum sed quia quos dolorum nam!',
//   avatar_info: {
//     avatar_url:
//       'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
//     avatar_name: 'Yagnesh Modh',
//     avatar_Designation: 'Designer',
//   },
// };
const data = [
  {
    id: 1,
    heading: 'Social Media Marketing Masterclass',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bcda0eb70e6127b5b859_image-4-events-education-x-template.jpg',
    publishedAt: {
      month: 'August',
      day: '11',
      year: '2022',
    },
    eventDate: {
      month: 'August',
      day: '11',
      year: '2022',
    },
    // startTime: '5:00 pm',
    // endTime: '6:00 pm EDT',
  },
  // {
  //   id: 2,
  //   title: 'Brand & Identity Design QA with Sophie Moore',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
  //   image:
  //     'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc900fef3e8a43d23b44_image-3-events-education-x-template-p-1600.jpeg',
  //   month: 'JULY',
  //   date: 28,
  //   day: 'Thursday',
  //   startTime: '8:00 pm',
  //   endTime: '9:00 pm EDT',
  // },
  // {
  //   id: 3,
  //   title: 'Business Analytics Free Webinar',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
  //   image:
  //     'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc4ebd472d856b26463f_image-2-events-education-x-template-p-1600.jpeg',
  //   month: 'AUGUST',
  //   date: 12,
  //   day: 'Friday',
  //   startTime: '6:00 pm',
  //   endTime: '7:00 pm EDT',
  // },

  // {
  //   id: 4,
  //   title: 'Landing Page Optimization Masterclass',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
  //   image:
  //     'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081ba3e044f192faf945c7e_image-1-events-education-x-template-p-1600.jpeg',
  //   date: 18,
  //   day: 'Thursday',
  //   month: 'August',
  //   startTime: '2:00 pm',
  //   endTime: '4:00 pm EDT',
  // },
];

const Event = (props: Props) => {
  return (
    <section className="px-container py-24">
      <div className="chipbody">
        <h2>All Events</h2>
        <div className="chipbody__header">
          <button className="chip chip--white px-6">All</button>
          <button className="chip chip--white px-6">Development</button>
          <button className="chip chip--white px-6">Design</button>
          <button className="chip chip--white px-6">Marketing</button>
        </div>
      </div>
      <div className="grid gap-8">
        {data.map((x) => (
          <Card data={x} className={'card--event_Card'} />
        ))}
      </div>
    </section>
  );
};

export default Event;
