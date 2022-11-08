import { Fragment, Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "../../assets";
import { THEMES } from "../../utils/constants";
import useTheme from "../../utils/hooks/useTheme";
import Button from "../../components/Button";

function Dashboard() {
    const [theme, toggleTheme] = useTheme();

    return (
        <Fragment>
            <header className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-slate-900 shadow-lg border-b dark:border-slate-300/10">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-white"
                            to="/"
                        >
                            Where in the world?
                        </Link>
                    </div>

                    <Button onClick={toggleTheme}>
                        {theme === THEMES.Dark ? (
                            <MoonIcon />
                        ) : (
                            <SunIcon />
                        )}
                        <span className="hidden pl-0 sm:flex sm:pl-1">
                            {theme === THEMES.Dark ? "Dark Mode" : "Light Mode"}
                        </span>
                    </Button>
                </div>
            </header >
            <main className="w-full p-10 dark:bg-slate-900 min-h-screen">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </Fragment>
    )
}

export default Dashboard;