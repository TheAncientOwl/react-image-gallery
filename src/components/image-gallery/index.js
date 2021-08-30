import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { Container, Slider, SliderItem, ImageDiv, Button } from './ImageGalleryElements';

const ImageGallery = ({ images, slideDuration, prevIcon, nextIcon }) => {
  const sliderTransitionDuration = useRef(slideDuration);

  const containerRef = useRef();
  const slideWidth = containerRef.current ? containerRef.current.offsetWidth : 0;

  const [slides, setSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlides([images[images.length - 1], ...images, images[0]]);
    setSlideIndex(1);
  }, [images]);

  const nextSlide = () => setSlideIndex(Math.min(slideIndex + 1, slides.length - 1));

  const prevSlide = () => setSlideIndex(Math.max(slideIndex - 1, 0));

  const handleSliderTransitionEnd = () => {
    const handleSlideIndexChange = newIndex => {
      sliderTransitionDuration.current = '0s';
      setSlideIndex(newIndex);

      setTimeout(() => (sliderTransitionDuration.current = slideDuration));
    };

    if (slideIndex === 0) handleSlideIndexChange(images.length);
    else if (slideIndex === slides.length - 1) handleSlideIndexChange(1);
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
        transitionDuration={sliderTransitionDuration.current}>
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
  slideDuration: PropTypes.string.isRequired,
  prevIcon: PropTypes.any.isRequired,
  nextIcon: PropTypes.any.isRequired,
};

export default ImageGallery;
