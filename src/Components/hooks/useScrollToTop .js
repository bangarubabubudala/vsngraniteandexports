import { useRef } from 'react';

const useScrollToTop = () => {
    const scrollToTopRef = useRef(null);

    const scrollToTop = () => {
        if (scrollToTopRef.current) {
            scrollToTopRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return { scrollToTop, scrollToTopRef };
};

export default useScrollToTop;