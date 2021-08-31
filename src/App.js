import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;

  margin: 3rem auto;

  outline: 1px solid red;
`;

import ImageGallery from './components/image-gallery';

import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';

const Images = [
  { src: Img1, alt: 'img1' },
  { src: Img2, alt: 'img2' },
  { src: Img3, alt: 'img3' },
  { src: Img4, alt: 'img4' },
];

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = styled(FaArrowAltCircleLeft)`
  color: white;

  font-size: 1.5em;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  color: white;

  font-size: 1.5em;
`;

const App = () => {
  return (
    <Container>
      <ImageGallery
        images={Images}
        autoPlay={true}
        slideInterval={3000}
        slideDuration={1500}
        prevIcon={<LeftArrow />}
        nextIcon={<RightArrow />}
      />
    </Container>
  );
};

export default App;
