import { useState, useEffect } from "react";

export function useScroll(instance) {
    const [y, setY] = useState(instance)
    useEffect(() => {
        const handlerScroll = () => {
            setY(document.documentElement.scrollTop)
            console.log(y);
            console.log(document.documentElement.scrollTop);
        }
        window.addEventListener('scroll', handlerScroll)
        return () => {
            window.removeEventListener('scroll', handlerScroll)
            console.log('事件被移除');
        }
    })

    return [y]
}