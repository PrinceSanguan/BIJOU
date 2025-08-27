
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
// Removed initializeTheme since we want to force light mode
// import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


// Force light mode by ensuring the 'dark' class is not present
document.documentElement.classList.remove('dark');


// Google Analytics 4 (GA4) tracking
declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
        dataLayer?: any[];
        gtag?: (...args: any[]) => void;
    }
}

if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
    window.GA_INITIALIZED = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer && window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name: string) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }: { el: HTMLElement; App: any; props: any }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// Removed initializeTheme() call to prevent overriding our forced white mode
// initializeTheme();
