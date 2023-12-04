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
  <div className="flex flex-col rounded-3xl bg-neutral-200 p-5 shadow-dark">
    <div className="text-xxl line-clamp-1 font-bold text-secondary3">{coursetype}</div>
    <h2 className="pt-2 font-bold">{duration}</h2>
    <p className="min-h-[120px] sm:min-h-[90px] md:min-h-[60px] line-clamp-2">
      {description}
    </p>
    <div className="mb-8">
      {detils.map((detail, index) => (
        <div className="flex items-start gap-4 py-3" key={index}>
          <OKIcon className="min-w-[24px]" />
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
    </div>
    <Link href="/contact" className="btn btn--primary mt-auto px-10
    ">
      Get Started
    </Link>
  </div>
);

const PlanCards = ({ data }) => (
  <section
    className="bg-neutral-200 px-container py-32"
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
