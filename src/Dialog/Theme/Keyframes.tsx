import { keyframes } from 'styled-components';

export const rcDialogZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const rcDialogZoomOut = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
`;

export const rcDialogFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const rcDialogFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;