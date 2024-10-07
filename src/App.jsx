import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Loading from './assets/components/Loading/Loading'
import Footer from './assets/components/Footer/Footer'

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))

import './assets/styles/style.scss'

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								<HomePage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/about'
						element={<Suspense fallback={<Loading />}>О проекте</Suspense>}
					/>
					<Route
						exact
						path='/specialists'
						element={<Suspense fallback={<Loading />}>Специалисты</Suspense>}
					/>
					<Route
						exact
						path='/auth/sign-up'
						element={<Suspense fallback={<Loading />}>Регистрация</Suspense>}
					/>
					<Route
						exact
						path='/auth/sign-in'
						element={<Suspense fallback={<Loading />}>Авторизация</Suspense>}
					/>
				</Routes>
			</main>
			<Footer />
		</>
	)
}
