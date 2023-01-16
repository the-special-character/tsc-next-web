import React from 'react';
import Image from 'next/image';
// import { ComponentCourseCourseFeatures } from 'types/types';
type Props = {
  // features: ComponentCourseCourseFeatures;
};

const CoursesPrice = ({ features }: Props) => {
  return (
    <div className="price__features">
      {features.map((data) => (
        <div key={data.title} className="price__content">
          <Image
            alt="alt for svg"
            src={data?.icons?.data?.attributes.url}
            height={32}
            width={32}
          />
          <div className="flex flex-1 items-center gap-1">
            {data?.key && (
              <span className="m-0 text-lg">{`${data?.key}:`}</span>
            )}
            <span className="text-lg font-bold text-neutral-700">
              {data?.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesPrice;
