"use client";

import { useEffect, useRef } from 'react';

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

interface CalendlyEmbedProps {
  url: string;
  height?: string;
}

export default function CalendlyEmbed({ url, height = "700px" }: CalendlyEmbedProps) {
  const calendlyRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Load the Calendly script only once
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        // Initialize Calendly if needed
        if (window.Calendly && calendlyRef.current) {
          // You can use Calendly's JS API here if needed
          // Example: window.Calendly.initInlineWidget({...})
        }
      };
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div 
      ref={calendlyRef}
      className="calendly-inline-widget overflow-hidden" 
      data-url={url}
      style={{ minWidth: "320px", height }}
    />
  );
}