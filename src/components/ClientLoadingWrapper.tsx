'use client';

import { useState, useEffect } from 'react';
import AtomLoadingScreen from './LoadingScreen';

export default function ClientLoadingWrapper() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // exemplo de progresso crescente
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return <AtomLoadingScreen progress={progress} />;
}
