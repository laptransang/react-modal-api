import { css } from 'styled-components';
import { zindexModal } from '../../Config';
// import { fadeEffect, fadeIn, fadeOut } from '../Mixin';

export const mask = css`
  &-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #37373799; // lesshint duplicateProperty: false
    height: 100%;
    z-index: ${zindexModal};
    filter: ~"alpha(opacity=50)";

    &-hidden {
      display: none;
    }
  }
`;