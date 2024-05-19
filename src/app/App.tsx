import "./styles/index.scss"
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";


export const App = () => {
    const {theme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};


