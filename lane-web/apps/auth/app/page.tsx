'use client';

import {useSomething} from "@custom/hooks";

export default function Auth() {
    const { count, increment } = useSomething();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
