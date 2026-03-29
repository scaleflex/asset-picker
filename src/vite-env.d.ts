/// <reference types="vite/client" />

declare module '*.css?inline' {
  const content: string;
  export default content;
}

declare module '@scaleflex/uploader/define' {
  const value: void;
  export default value;
}

declare module 'hls.js/dist/hls.light.mjs' {
  import Hls from 'hls.js';
  export default Hls;
}
