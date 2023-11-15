import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loading from 'Features/Loading/Loading'
import './styles/index.scss'

const MainPage = lazy(() => import('Pages/MainPage/'))
const RegistrationPage = lazy(() => import('Pages/RegistrationPage'))
const LogInPage = lazy(() => import('Pages/LogInPage'))
const BoardPage = lazy(() => import('../Pages/BoardPage'))
const BoardListPage = lazy(() => import('Pages/BoardListPage'))

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/board-page" element={<BoardPage />} />
                        <Route path="/log-in" element={<LogInPage />} />
                        <Route path="/board-list-workspace" element={<BoardListPage />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App;




