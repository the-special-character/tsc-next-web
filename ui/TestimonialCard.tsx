'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Testimonial, TestimonialEntity, UploadFile } from 'types/types';
import Rating from './Rating';
import '@/styles/testimonialCard.css';
import clsx from 'clsx';
import VideoDialog from './VideoDialog';
import PlayButton from '@/public/icons/play-button.svg';

type Props = {
  testimonial: TestimonialEntity;
  style?: React.CSSProperties;
};

export const TestimonialCardSkeleton = () => {
  return (
    <div className={clsx('testimonial_card', {})}>
      <div className="testimonial_card__img h-[200px] w-[200px] rounded-full bg-neutral-300">
        <div></div>
      </div>
      <div className="testimonial_card__body">
        <div className="testimonial_card__rating" />
        <p className="testimonial_card__desc font-cursive">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          corrupti commodi consequatur, alias in modi fuga architecto ipsa
          quaerat rem.
        </p>
        <div className="user_info">
          <h6 className="font-cursive">Lorem ipsum.</h6>
          <p className="font-cursive">
            <span>Lorem ipsum dolor sit amet.</span>
            <span>lorem ispojf</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, style }: Props) => {
  const { avatar, rating, quote, name, designation, company } =
    testimonial.attributes as Testimonial;
  const { url, alternativeText } = avatar?.data?.attributes as UploadFile;
  const modelRef = useRef();
  return (
    <>
      <dialog id="dialog" ref={modelRef}>
        <form method="dialog">
          <VideoDialog />
        </form>
      </dialog>
      <div style={style} className={clsx('testimonial_card', {})}>
        <figure className="testimonial_card__img">
          <Image
            src={`${url}?tr=h-200,w-200`}
            alt={`${alternativeText}`}
            height={200}
            width={200}
          />

          <div
            className="testimonial_card__img__hover_icon"
            onClick={() => {
              modelRef.current.showModal();
            }}
          >
            <PlayButton />
          </div>
        </figure>
        <div className="testimonial_card__body">
          <Rating rate={rating} className="testimonial_card__rating" />
          <p className="testimonial_card__desc">{`"${quote}"`}</p>
          <div className="user_info">
            <h6>{name}</h6>
            <p>{`${designation} at ${company}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
