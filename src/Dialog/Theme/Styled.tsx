import styled from 'styled-components';

import { prefixCls } from '../Config';
import { base, mask, close, dialog, effect } from './Components';

export const Container = styled.div`
  ${base};
  
  .${prefixCls} {
    ${mask};
    ${dialog};
    ${close};
    ${effect};
  }
`;
