import { css } from 'styled-components';

export const close = css`
  &-close {
    cursor: pointer;
    border: 0;
    background: transparent;
    font-size: 21px;
    position: absolute;
    right: 5px;
    top: 5px;
    font-weight: 700;
    line-height: 1;
    color: #00497A;
    text-shadow: 0 1px 0 #fff;
    text-decoration: none;
    z-index: 1;
    outline: none;

    &-x:after {
        content: '×'
    }

    &:hover {
      filter: alpha(opacity=20);
      opacity: .2;
      text-decoration: none;
    }
  }    
`;