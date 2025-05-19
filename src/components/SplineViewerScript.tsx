"use client";

import { useEffect } from 'react';

const SplineViewerScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts (optional but good practice)
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SplineViewerScript;