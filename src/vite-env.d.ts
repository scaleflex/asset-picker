/// <reference types="vite/client" />

declare module '*.css?inline' {
  const content: string;
  export default content;
}

declare module 'hls.js/dist/hls.light.mjs' {
  import Hls from 'hls.js';
  export default Hls;
}
