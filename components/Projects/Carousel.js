import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';

export default function CarouselContainer({ img }) {
  return (
    <Carousel
      className="mb-10"
      infiniteLoop={true}
      showStatus={false}
      swipeable={true}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute h-full z-10 ml-4 md:ml-6 top-0 left-0"
          >
            <CgChevronLeftO className="w-10 h-10 md:w-14 md:h-14 text-slate-50 ease-in duration-100 animate-pulse" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute h-full z-10 mr-4 md:mr-6 top-0 right-0"
          >
            <CgChevronRightO className="w-10 h-10 md:w-14 md:h-14 text-slate-50 ease-in duration-100 animate-pulse" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index) => {
        if (isSelected) {
          return (
            <li className="w-3 h-3 md:w-5 md:h-5 inline-block rounded-full bg-blue-600 mx-2" />
          );
        }
        return (
          <li
            className="w-2 h-2 md:w-3 md:h-3 inline-block rounded-full bg-blue-100 mx-2"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
          />
        );
      }}
    >
      {img.map((img, key) => {
        return (
          <div key={key}>
            <Image
              src={img.attributes.formats.large.url}
              alt="..."
              width={1000}
              height={600}
              className="rounded-xl"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0Do2vBwADcgGA2WOZUwAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </div>
        );
      })}
    </Carousel>
  );
}
