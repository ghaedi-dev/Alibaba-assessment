import { useCallback, useEffect, useState } from "react";
import { THEMES } from "../constants";

function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const toggleTheme = useCallback(() => {
        if (theme === THEMES.Dark) setTheme(THEMES.Light);
        else setTheme(THEMES.Dark);
        document.body.classList.toggle(THEMES.Light);
        document.body.classList.toggle(THEMES.Dark);
    }, [theme]);

    useEffect(() => {
        if (theme === THEMES.Light || theme === THEMES.Dark) {
            document.body.classList.add(theme);
        } else {
            localStorage.setItem("theme", THEMES.Light);
            document.body.classList.add(THEMES.Light);
            setTheme(THEMES.Light);
        }

        // Save theme to Local Storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, toggleTheme];
}

export default useTheme;