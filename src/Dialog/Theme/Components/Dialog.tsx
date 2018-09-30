import { css } from 'styled-components';
import { zindexModal } from '../../Config';
// import { zoomEffect, zoomIn, zoomOut } from '../Mixin';

export const dialog = css`
  &-wrap {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${zindexModal};
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
  
  &-title {
    margin: 0;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
  } 
  
  &-content {
    position: relative;
    background-color: #ffffff;
    border: none;
    background-clip: padding-box;
  }  
`;
