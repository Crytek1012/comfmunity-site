'use client';
import { useEffect, useState } from 'react';

export default function ConnectionsCount() {
    const [animated, setAnimated] = useState(0);
    const [target, setTarget] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/connections-count')
            .then(res => res.json())
            .then(data => setTarget(data.count));
    }, []);

    useEffect(() => {
        if (target === null) return;

        let frame = 0;
        const duration = 2000;
        const totalFrames = Math.round(duration / 16);
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const interval = setInterval(() => {
            frame++;
            const progress = easeOutCubic(Math.min(frame / totalFrames, 1));
            const value = Math.round(target * progress);
            setAnimated(value);
            if (progress >= 1) clearInterval(interval);
        }, 16);

        return () => clearInterval(interval);
    }, [target]);

    return <>{animated}</>;
}
