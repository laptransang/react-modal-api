import { css } from 'styled-components';
import { rcDialogZoomIn, rcDialogZoomOut, rcDialogFadeIn, rcDialogFadeOut } from './Keyframes';

export const zoomEffect = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;
`;

export const zoomIn = css`
  animation-name: ${rcDialogZoomIn};
  animation-play-state: running;
`;

export const zoomOut = css`
    animation-name: ${rcDialogZoomOut};
    animation-play-state: running;
`;

export const fadeEffect = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
  animation-play-state: paused;
`;

export const fadeIn = css`
  animation-name: ${rcDialogFadeIn};
  animation-play-state: running;
`;

export const fadeOut = css`
  animation-name: ${rcDialogFadeOut};
  animation-play-state: running;
`;