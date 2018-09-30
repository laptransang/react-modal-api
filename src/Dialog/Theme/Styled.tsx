import styled from 'styled-components';

import { prefixCls } from '../Config';
import { base, mask, close, dialog, effect } from './Components';

export const Container = styled.div`
  .${prefixCls} {
    ${base};
    ${mask};
    ${dialog};
    ${close};
    ${effect};
  }
`;
