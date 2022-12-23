import React from 'react';
import '@/styles/usercard.css';
import Button from '@/ui/Button';
import Image from 'next/image';

type Props = {};

const UserCard = (props: Props) => {
  return (
    <section className="px-container">
      <div className="user_card ">
        <div className="user_card__image avatar">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            alt="avatar"
            fill
          />
        </div>
        <div className="user_card__details">
          <div className=" user_card__heading">
            <h2 className="!m-0">Kathie Corl</h2>
            <div className="chip chip--white w-auto hover:bg-primary">
              Design
            </div>
          </div>
          <p className="user_card__desc">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
            phasellus vestibulum lorem sed risus ultricies.
          </p>
          <div>
            <Button as="button" variant="primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
