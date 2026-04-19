'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

export default function LogRocketProvider() {
  useEffect(() => {
    try {
      if(process.env.NEXT_PUBLIC_ENV === "prod") {
        LogRocket.init('434kyl/orkeneo');
        // Uncomment and modify this when you want to identify users
        // LogRocket.identify('1', {
        //   name: 'James Morrison',
        //   email: 'jamesmorrison@example.com',
        //   subscriptionType: 'pro'
        // });
      }
    } catch (error) {
      console.error('Failed to initialize LogRocket:', error);
    }
  }, []);

  return null;
} 