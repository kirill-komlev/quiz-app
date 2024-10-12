import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Loading from './assets/components/Loading/Loading'
import Footer from './assets/components/Footer/Footer'

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))
const AuthorizationPage = lazy(() => import('./assets/pages/AuthorizationPage/AuthorizationPage'))
const DashboardPage = lazy(() => import('./assets/pages/DashboardPage/DashboardPage'))

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
						path='/sign-in'
						element={
							<Suspense fallback={<Loading />}>
								<AuthorizationPage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/dashboard'
						element={
							<Suspense fallback={<Loading />}>
								<DashboardPage />
							</Suspense>
						}
					/>
				</Routes>
			</main>
			<Footer />
		</>
	)
}
