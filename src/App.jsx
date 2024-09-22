import { lazy, Suspense } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Loading from './assets/components/Loading/Loading'

import './assets/styles/style.scss'

export default function App() {
	return (
		<>
			<Header></Header>
			<main>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi
								reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem
								itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil,
								commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni
								autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam
								tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, harum rerum magni autem itaque sunt consequatur
								quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nisi delectus, harum rerum magni autem itaque sunt consequatur quia inventore voluptas? Nihil, commodi reiciendis incidunt quam tempore laudantium quaerat maxime
								minima?
							</Suspense>
						}
					/>

					<Route
						exact
						path='/about'
						element={<Suspense fallback={<Loading />}>About</Suspense>}
					/>
					<Route
						exact
						path='/specialists'
						element={<Suspense fallback={<Loading />}>specialists</Suspense>}
					/>
				</Routes>
			</main>
		</>
	)
}
