import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const Slider = styled.div(
  ({ widthPx, offsetPx, transitionDuration }) => css`
    display: flex;

    height: 100%;
    width: ${`${widthPx}px`};

    will-change: transform;
    transform: translateX(${`-${offsetPx}px`});
    transition: transform ease ${transitionDuration};
  `
);

export const SliderItem = styled.div`
  height: 100%;

  flex: 1;
`;

export const ImageDiv = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;

export const Button = styled.div(
  ({ left }) => css`
    position: absolute;
    z-index: 20;
    left: ${left ? '0.5em' : ''};
    right: ${left ? '' : '0.5em'};
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
  `
);
