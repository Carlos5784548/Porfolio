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
    }, [motionValue, inView, to]);

    return <span ref={ref}>{springValue.to((latest) => Math.round(latest) + suffix)}</span>;
};

export default AnimatedCounter;