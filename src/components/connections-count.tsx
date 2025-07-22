'use client';
import { useEffect, useState } from 'react';

export default function ConnectionsCount({ count }: { count: number }) {
    const [animated, setAnimated] = useState(0);

    useEffect(() => {
        let frame = 0;
        const duration = 2000;
        const totalFrames = Math.round(duration / 16);

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const interval = setInterval(() => {
            frame++;
            const progress = easeOutCubic(Math.min(frame / totalFrames, 1));
            const value = Math.round(count * progress);
            setAnimated(value);
            if (progress >= 1) clearInterval(interval);
        }, 16);

        return () => clearInterval(interval);
    }, [count]);

    return <>{animated}</>;
}
