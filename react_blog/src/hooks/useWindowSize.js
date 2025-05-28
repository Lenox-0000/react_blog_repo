import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [window_size, set_window_size] = useState({width: undefined,height: undefined});

    useEffect(() => {

        function handle_resize()
        {
            set_window_size({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handle_resize();

        window.addEventListener("resize", handle_resize);

        return () => window.removeEventListener("resize", handle_resize);
    }, [])

    return window_size;
}

export default useWindowSize;