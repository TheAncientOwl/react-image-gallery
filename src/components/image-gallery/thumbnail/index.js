import PropTypes from 'prop-types';
import { Slider } from '../ImageGalleryElements';
import { Container } from './ThumbnailElements';

// @imageWidth  :number, in px
// @imageHeight :number, in px
const Thumbnail = ({ images, currentIndex, transitionDuration, imageWidth, imageHeight }) => {
  images, currentIndex, imageWidth, imageHeight, transitionDuration;

  return (
    <Container height={imageHeight}>
      <Slider widthPx={images.length * imageWidth}></Slider>
    </Container>
  );
};

Thumbnail.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  transitionDuration: PropTypes.number.isRequired,
};

export default Thumbnail;
