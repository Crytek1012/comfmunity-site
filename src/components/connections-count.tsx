// components/ConnectionsCount.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ConnectionsCount() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/connections')
            .then(res => res.json())
            .then(data => setCount(data.count));
    }, []);

    return <>{count}</>;
}
