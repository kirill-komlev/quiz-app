import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Loading from './assets/components/Loading/Loading'

const Header = lazy(() => import('./assets/components/Header/Header'))
const DashboardHeader = lazy(() => import('./assets/components/Header/DashboardHeader'))

const Footer = lazy(() => import('./assets/components/Footer/Footer'))
const DashboardFooter = lazy(() => import('./assets/components/Footer/DashboardFooter'))

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))
const AuthorizationPage = lazy(() => import('./assets/pages/AuthorizationPage/AuthorizationPage'))
const DashboardPage = lazy(() => import('./assets/pages/DashboardPage/DashboardPage'))

import './assets/styles/style.scss'

export default function App() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route
						exact
						path='*'
						element={<Header />}
					/>
					<Route
						exact
						path='/dashboard'
						element={<DashboardHeader />}
					/>
				</Routes>
				<main>
					<Routes>
						<Route
							exact
							path='/'
							element={<HomePage />}
						></Route>

						<Route
							exact
							path='/sign-in'
							element={<AuthorizationPage />}
						/>
						{/* <Route
							exact
							path='/dashboard'
						>
							<Route
								index
								element={<DashboardPage />}
							/>
							<Route
								path='test-1'
								element={<div>test 1</div>}
							/>
						</Route> */}
						<Route
							exact
							path='/dashboard'
							element={<DashboardPage />}
						/>
					</Routes>
				</main>
				<Routes>
					<Route
						exact
						path='*'
						element={<Footer />}
					/>
					<Route
						exact
						path='/dashboard'
						element={<DashboardFooter />}
					/>
				</Routes>
			</Suspense>
		</>
	)
}
