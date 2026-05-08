import React from 'react';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
    from: number;
    to: number;
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, suffix = '' }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { duration: 1500 });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>{from}{suffix}</span>;
};

export default AnimatedCounter;