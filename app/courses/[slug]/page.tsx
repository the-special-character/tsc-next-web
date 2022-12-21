import '@/styles/individualcourse.css';
import DesignSvg from '@/public/icons/design.svg';
import PlayVideo from '@/public/icons/playVideo.svg';
import Image from 'next/image';
import Price from './price';
import ChipNavigation from '@/ui/ChipNavigation';
import Rating from '@/ui/Rating';

const loader = () => {
  console.log('====================================');
  console.log('hello');
  console.log('====================================');
};
const learnData = [
  {
    desc: 'Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.',
  },
  {
    desc: 'Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.',
  },
  {
    desc: 'Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.',
  },
  {
    desc: 'Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.',
  },
];

const TestimonialInfo = [
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 2,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
];

const chipNavData = [
  {
    link: '#about',
    label: 'About',
  },
  {
    link: '#topic',
    label: 'Results',
  },
  {
    link: '#result',
    label: 'Topics',
  },
  {
    link: '#review',
    label: 'Reviews',
  },
];

export default async function Page() {
  return (
    <section id="individualcourse" className="individualcourse">
      <div className="individualcourse__content">
        <div className="individualcourse__content__bg"></div>
        <div className="individualcourse__content__round"></div>
      </div>
      <div className="main py-16">
        <div className="main__left-section">
          <div className="chip justify-start px-0">
            <div className="chip chip--white top-28 left-0 gap-1 py-3">
              <DesignSvg className="w-4" />
              <span className="font-bold">Design</span>
            </div>
          </div>
          <h2 className="main__left-section__title">Brand & Identity Design</h2>
          <p className="pb-6 text-neutral-100">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
            phasellus vestibulum lorem sed risus ultricies.
          </p>
          <div className="main__left-section__preview">
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2cfe66189f214c09a0c3_image-4-courses-education-x-template.jpg"
              alt="playvideo"
              className="rounded-3xl brightness-50"
              fill
            />
            <div className="main__left-section__preview__body">
              <a
                href="#popup-open"
                id="popup-button"
                className="hamburger"
                title="Open Menu"
                aria-label="Open Menu"
              >
                <div className="popup-icon flex h-20 w-20 items-center justify-center rounded-full bg-secondary1 md:h-32 md:w-32">
                  <PlayVideo
                    role="presentation"
                    focusable="false"
                    aria-label="trigram for heaven symbol"
                    className="!m-auto h-9 w-7 fill-primary"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <Price />
          </div>
          <div className="main__left-section__course-navigation">
            <ChipNavigation chipData={chipNavData} />
          </div>
          <section id="about" className="main__left-section__about">
            <h2>About the course</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus viverra praesent felis
              consequat pellentesque turpis et quisque platea. Eu, elit ut nunc
              ac mauris bibendum nulla placerat. Sagittis sit eu sit massa
              sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat
              et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et
              tellus. Aliquet elit senectus iaculis netus gravida.
            </p>
          </section>
          <section id="topic" className="main__left-section__topic">
            <h2>What will you learn</h2>
            <p>
              Euismod sem purus rutrum in. Tortor varius a bibendum nisl et
              tellus. Aliquet elit senectus iaculis netus gravida
            </p>
            <ol
              style={{
                listStyle: 'decimal',
              }}
            >
              {learnData.map((data) => (
                <li>{data.desc}</li>
              ))}
            </ol>
          </section>
          <section id="result" className="main__left-section__result">
            <h2>Results after course completion</h2>
            <p>
              Eget aliquet nibh praesent tristique magna sit amet purus.
              Consequat id porta nibh venenatis cras sed felis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo nec. Habitant morbi
              tristique senectus et netus et malesuada fames ac. Et tortor
              consequat id porta nibh venenatis cras sed felis.
            </p>

            <div className="main__left-section__image">
              <Image
                className="rounded-3xl"
                alt="result"
                fill
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f294e56e6b00b752780af_image-course-results-education-x-template.jpg"
              />
            </div>
          </section>
          <section id="review" className="course-review pt-12 md:pt-16">
            <h2 className="text-center md:text-left">What our Students say</h2>
            <div className="testimonial">
              {TestimonialInfo.map((testimonial) => {
                return (
                  <div className="testimonial__card card" key={testimonial.id}>
                    <div className="card__image testimonial__card__image">
                      <Image src={testimonial.url} alt="image" fill />
                    </div>
                    <div className="card__body testimonial__card__body">
                      <figure>{testimonial.star}</figure>
                      <p className="card__desc">{testimonial.description}</p>
                      <h4>{testimonial.name}</h4>
                      <p className="card__desc">{testimonial.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="sticky top-0 hidden self-start lg:block">
          <div className="individualcourse__right-section">
            <Price />
          </div>
        </div>
      </div>
      <aside id="popup-open">
        <span id="popup-close">
          <a href="#" title="Close Menu" aria-label="Close Menu">
            X
          </a>
        </span>

        <iframe
          loading="lazy"
          className="popup-video"
          src="https://www.youtube.com/embed/Icf5D3fEKbM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </aside>
    </section>
  );
}
