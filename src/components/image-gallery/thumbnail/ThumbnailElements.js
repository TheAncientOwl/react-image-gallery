import styled, { css } from 'styled-components';

import { Container as ContainerBase } from '../ImageGalleryElements';
export const Container = styled(ContainerBase)(
  ({ height }) =>
    css`
      height: ${height}px;
      background: red;
    `
);
