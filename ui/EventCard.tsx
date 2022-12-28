import React from 'react';
import Icon from './Icon';
import '@/styles/eventcard.css';
import Image from 'next/image';
import { type } from 'os';

type date = {
  day: number;
  month: String;
  year: number;
};

type chip = {
  name: string;
  selected?: boolean;
}[];

type publishedAt = {
  day: String;
  startTime: number;
  endTime: number;
};

type dataType = {
  image_url: any;
  eventDate: date;
  publishedAt: publishedAt;
  alternativeText: String;
  icon: String;
  date: String;
  heading: String;
  description: String;
  isHorizontal: boolean;
  chips: chip;
}[];

export const EventCardSkeleton = () => {
  return (
    <>
      <div className="event_Card animate-pulse">
        {[1, 2].map((data) => (
          <div className="event__section">
            <figure className="card__image bg-neutral-300">
              <div></div>
            </figure>
            <div className="event__body">
              <div className="event__date font-cursive">
                <div className="h-7 w-7 bg-neutral-300"></div>
                <time>11 August, 2022 EDT</time>
              </div>

              <time className="date">
                <span className="font-cursive text-xs uppercase md:text-base">
                  AUGUST
                </span>
                <span className="font-cursive text-4xl md:text-[48px]">11</span>
              </time>

              <div className="event__datails ">
                <h3 className="card__title font-cursive">
                  Social Media Marketing Masterclass
                </h3>

                <p className="card__desc font-cursive">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

type Props = {
  data: dataType;
};

const EventCard = ({ data }: Props) => {
  return (
    <>
      <div className="event_Card">
        {data.map((data) => (
          <div className="event__section">
            <figure className="card__image">
              <Image src={data.image_url} alt="alt text" fill />
            </figure>
            <div className="event__body">
              {data?.publishedAt && (
                <div className="event__date">
                  <Icon name="calendar" />
                  <time>{`${data.publishedAt.day} ${data.publishedAt.startTime} - ${data.publishedAt.endTime}`}</time>
                </div>
              )}
              {data?.eventDate && (
                <time className="date">
                  <span className="text-xs uppercase md:text-base">
                    {data.eventDate.month}
                  </span>
                  <span className="text-4xl md:text-[48px]">
                    {data.eventDate.day}
                  </span>
                </time>
              )}
              <div className="event__datails ">
                <h3 className="card__title !m-0">{data?.heading}</h3>
                {data?.description && (
                  <p className="card__desc">{data?.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCard;
