'use client';

import { useState } from 'react';

export function useSomething() {
    const [count, setCount] = useState(0);
    return { count, increment: () => setCount(count + 1) };
}
