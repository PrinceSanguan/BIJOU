/// <reference types="vite/client" />

// Import Inertia's type definitions
declare module '@inertiajs/core' {
  interface PageProps {}
}

// Make TypeScript aware of our custom types
declare module '@/types' {
  import { Service } from './types';
  export { Service };
}
