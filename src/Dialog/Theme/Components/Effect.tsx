import { css } from 'styled-components';
import { zoomEffect, fadeEffect, zoomIn, zoomOut, fadeIn, fadeOut  } from '../Mixin';

export const effect = css`
  &-zoom-enter, &-zoom-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    ${zoomEffect};
  }
  &-zoom-leave {
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    ${zoomEffect};
  }
  &-zoom-enter {
     &-active {
      ${zoomIn};
    }
  }
  
  &-zoom-appear {
     &-active {
      ${zoomIn};
    }
  }
  
   &-zoom-leave{
     &-active {
      ${zoomOut};
     }
   }
  
  &-fade-enter,&-fade-appear {
    opacity: 0;
    ${fadeEffect};
  }
  
   &-fade-leave {
    ${fadeEffect};
  }
  
  &-fade-enter  {
    &-active {
      ${fadeIn};
    }
  }
  
  &-fade-appear {
    &-active {
      ${fadeIn};
    }
  }
  
  &-fade-leave {
     &-active {
      ${fadeOut};
    }
  }  
`;
