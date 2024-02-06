import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loading from 'Features/Loading/Loading'
import './styles/index.scss'
import { auth } from '../Features/FireBase/firebase'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'

const MainPage = lazy(() => import('Pages/MainPage/'))
const RegistrationPage = lazy(() => import('Pages/RegistrationPage'))
const LogInPage = lazy(() => import('Pages/LogInPage'))
const BoardPage = lazy(() => import('Pages/BoardPage'))
const BoardListPage = lazy(() => import('Pages/BoardListPage'))
const AboutPage = lazy(() => import('Pages/AboutPage'))
const ContactPage = lazy(() => import('Pages/ContactPage'))
const FAQPage = lazy(()=>import('Pages/FAQPage'))
const UserPage = lazy(()=>import('Pages/UserPage'))



const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setAuthChecked(true);
        });
        return unsubscribe;
    }, []);

    const handleSignOut = () => {
        signOut(auth).catch(err => console.log(err));
    };

    console.log(user);

    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/user-profile' element={<UserPage/>}/>
                        <Route path="/board-page" element={<BoardPage handleSignOut={handleSignOut} user={user} />} />
                        <Route path="/log-in" element={<LogInPage />} />
                        <Route path="/board-list-workspace" element={<BoardListPage handleSignOut={handleSignOut} user={user} />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path='/questions-FAQ' element={<FAQPage/>}/>
                        <Route path='/about-page' element={<AboutPage />} />
                        <Route path='/contact-page' element={<ContactPage/>}/>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App;




