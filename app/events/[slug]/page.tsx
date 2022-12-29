import { getEvents } from '@/lib/getEvents';
import '@/styles/allevents.css';
import EventDatailPage, { EventDatailPageSkeleton } from '@/ui/EventDatailPage';
import Image from 'next/image';
import { use } from 'react';
import md from 'markdown-it';
import Link from 'next/link';

export const PageSkeleton = () => {
  return (
    <section className="events animate-pulse">
      <div>
        <div className="events__banner  "></div>
        <div className="events__animate-bounce-slow1  "></div>
        <div className="events__animate-bounce-slow2 "></div>
      </div>
      <div className="events__page">
        <div className="events__image bg-neutral-300">
          <div></div>
        </div>
        <div className="pt-8">
          <EventDatailPageSkeleton />
        </div>
        <div className="events__paragraph">
          <h2 className="mb-0 font-cursive text-3xl md:mb-2 md:text-6xl">
            Event Agenda
          </h2>
          <p className="font-cursive">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
            scelerisque egestas. Volutpat, adipiscing a elit platea amet et. At
            at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
            habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
            morbi risus. Ornare aliquam phasellus consequat amet velit risus.
          </p>
          <p className="font-cursive">
            Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget.
            Massa, lectus orci auctor morbi. A nisl vitae, sagittis elementum
            placerat nullam id integer leo. Diam venenatis amet diam odio
            ultrices auctor.
          </p>
          <ol style={{ listStyle: 'disc' }}>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
          </ol>
          <button className="events__button btn btn--primary font-cursive">
            REGISTER TO EVENT
          </button>
        </div>
      </div>
    </section>
  );
};
export type Props = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
}

const Page = ({ params }: Props) => {
  const eventData = use(getEvents(params.slug));
  const [{ attributes }] = eventData.data.Event.data;
  const {
    image,
    content
  } = attributes
  return (
    <section className="events">
      <div>
        <div className="events__banner "></div>
        <div className="events__animate-bounce-slow1 "></div>
        <div className="events__animate-bounce-slow2"></div>
      </div>
      <div className="events__page">
        <div className="events__image">
          <Image
            alt="alt"
            src={
              image.data.attributes.url
            }
            fill
          />
        </div>
        <div className="pt-8">
          <EventDatailPage data={attributes} />
        </div>
        <div className="events__paragraph" >

          <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
          <Link href={"#"} role={'button'} className="events__button btn btn--primary mt-4">
            REGISTER TO EVENT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
