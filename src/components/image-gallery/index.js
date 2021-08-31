import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { Container, Slider, SliderItem, ImageDiv, Button } from './ImageGalleryElements';
import useInterval from '../hooks/useInterval';

// @images        array [{src: '', alt: ''}]
// autoplay       bool
// @slideInterval number in ms
// @slideDuration number in ms
const ImageGallery = ({ images, autoPlay, slideInterval, slideDuration, prevIcon, nextIcon }) => {
  const containerRef = useRef();
  const slideWidth = containerRef.current ? containerRef.current.offsetWidth : 0;

  const slideDurationRef = useRef(slideDuration);

  const [slides, setSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setSlides([images[images.length - 1], ...images, images[0]]);
    setSlideIndex(1);
  }, [images]);

  const nextSlide = () => setSlideIndex(Math.min(slideIndex + 1, slides.length - 1));

  const prevSlide = () => setSlideIndex(Math.max(slideIndex - 1, 0));

  if (autoPlay) useInterval(nextSlide, slideInterval, [slideIndex]);

  const handleSliderTransitionEnd = () => {
    const setIndex = newIndex => {
      slideDurationRef.current = '0s';
      setSlideIndex(newIndex);
      setTimeout(() => (slideDurationRef.current = slideDuration));
    };

    if (slideIndex === 0) setIndex(images.length);
    else if (slideIndex === slides.length - 1) setIndex(1);
  };

  return (
    <Container className='sliderWidth' ref={containerRef}>
      <Button left onClick={prevSlide}>
        {prevIcon}
      </Button>

      <Slider
        onTransitionEnd={handleSliderTransitionEnd}
        widthPx={slideWidth * slides.length}
        offsetPx={slideIndex * slideWidth}
        transitionDuration={slideDurationRef.current}>
        {slides.map((item, index) => (
          <SliderItem key={index}>
            <ImageDiv src={item.src} alt={item.alt} />
          </SliderItem>
        ))}
      </Slider>

      <Button onClick={nextSlide}>{nextIcon}</Button>
    </Container>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  slideInterval: PropTypes.number.isRequired,
  slideDuration: PropTypes.number.isRequired,
  prevIcon: PropTypes.any.isRequired,
  nextIcon: PropTypes.any.isRequired,
};

export default ImageGallery;
