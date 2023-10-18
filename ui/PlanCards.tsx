import React from 'react';
import OKIcon from '@/public/icons/ok.svg';
import Link from 'next/link';

const PlanCard = ({
  coursetype,
  duration,
  description,
  detils,
  notincourse,
}) => (
  <div className="rounded-3xl bg-neutral-300 p-5 shadow-dark">
    <div className="text-xxl font-bold text-secondary3">{coursetype}</div>
    <h2 className="pt-2 font-bold">{duration}</h2>
    <p>{description}</p>
    {detils.map((detail, index) => (
      <div className="flex items-center gap-4 py-3" key={index}>
        <OKIcon />
        <p className="font-semibold">{detail}</p>
      </div>
    ))}
    {notincourse.map((notIncluded, index) => (
      <div className="flex items-center gap-4 py-3" key={index}>
        <OKIcon fill="gray" />
        <p className="font-semibold text-neutral-500 line-through">
          {notIncluded}
        </p>
      </div>
    ))}
    <Link href="/contact">
      <button className="btn btn--primary m mt-8 px-20">Get Started</button>
    </Link>
  </div>
);

const PlanCards = ({ data }) => (
  <section
    className="bg-neutral-200 px-container py-28"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '5vw',
    }}
  >
    {data.map((val, index) => (
      <PlanCard key={index} {...val} />
    ))}
  </section>
);

export default PlanCards;
