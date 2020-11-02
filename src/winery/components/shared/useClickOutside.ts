import {useEffect, useRef} from "react";

const useClickOutside = (action: () => void) => {

    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(event.target))
            {
                action();
            }
        };
        document.addEventListener('mousedown', (e) => handleClickOutside(e));
        return document.removeEventListener('mousedown', (e) => handleClickOutside(e));
        // eslint-disable-next-line
    }, []);

    return {wrapperRef};
};

export default useClickOutside;