/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'rc-util/lib/KeyCode' {
  const Ret: {ESC:any;TAB:any;};
  export default Ret;
}

declare module 'rc-util/lib/*' {
  const Ret: any;
  export default Ret;
}

declare module 'rc-animate' {
  const Ret: any;
  export default Ret;
}

declare module 'styled-components' {
  const styled: any;
  const css: any;
  const keyframes: any;
  export { css, keyframes };
  export default styled;
}