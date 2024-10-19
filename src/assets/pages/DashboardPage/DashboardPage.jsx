import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

export default function DashboardPage() {
	return (
		<>
			<section className='dashboard'>
				<div className='dashboard__inner fullsize-container'>
					<ScrollToTop />
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route
								index
								element={<DashboardAuth></DashboardAuth>}
							></Route>
							<Route
								path='test-1'
								element={<div>test 1</div>}
							/>
							<Route
								path='test-2'
								element={<div>test 2</div>}
							/>
							<Route
								path='test-3'
								element={<div>test 3</div>}
							/>
						</Routes>
					</Suspense>
				</div>
			</section>
		</>
	)
}

function DashboardAuth() {
	return (
		<>
			<form
				action=''
				className='dashboard__form'
			>
				<h2 className='form__title'>Дополнительная информация</h2>
				<div className='form__blocks'>
					<label
						htmlFor='name'
						className='form__name-title'
					>
						Имя
					</label>
					<input
						type='text'
						id='name'
						className='form__name'
					/>
					<label
						htmlFor='surname'
						className='form__surname-title'
					>
						Фамилия
					</label>
					<input
						type='text'
						id='surname'
						className='form__surname'
					/>
					<label
						htmlFor='date-of-birth'
						className='form__date-of-birth-title'
					>
						Дата рождения
					</label>
					<input
						type='text'
						id='date-of-birth'
						className='form__date-of-birth'
					/>
					<label
						htmlFor='class'
						className='form__class-title'
					>
						Класс
					</label>
					<input
						type='text'
						id='class'
						className='form__class'
					/>
					<label
						htmlFor='school'
						className='form__school-title'
					>
						Школа
					</label>
					<input
						type='text'
						id='school'
						className='form__name'
					/>
					<label
						htmlFor='school'
						className='form__school-title'
					>
						Школа
					</label>
					<input
						type='text'
						id='school'
						className='form__name'
					/>
					<label
						htmlFor='school'
						className='form__school-title'
					>
						Школа
					</label>
					<input
						type='text'
						id='school'
						className='form__name'
					/>
					<label
						htmlFor='school'
						className='form__school-title'
					>
						Школа
					</label>
					<input
						type='text'
						id='school'
						className='form__name'
					/>
				</div>

				<Link
					to='test-1'
					className='form__link'
				>
					<button className='button form__button'>Далее</button>
				</Link>
			</form>
		</>
	)
}
