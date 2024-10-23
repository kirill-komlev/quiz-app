import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'
import InstructionsForTheTest from '../../components/InstructionsForTheTest/InstructionsForTheTest'

import Test1 from '../../components/Test1/Test1'

import { test2 } from '../../data/test_data'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

// https://habr.com/ru/companies/otus/articles/574428/

export default function DashboardPage() {
	return (
		<>
			<div className='dashboard'>
				<div className='dashboard__inner fullsize-container'>
					<ScrollToTop />
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route
								index
								element={<DashboardInfo></DashboardInfo>}
							/>
							<Route
								path='auth'
								element={<DashboardAuth></DashboardAuth>}
							/>

							<Route path='test-1/*'>
								<Route
									index
									element={<Test1></Test1>}
								/>
								<Route
									path='instructions-for-the-test'
									element={<InstructionsForTheTest id={0} />}
								/>
							</Route>
							<Route path='test-2'>
								<Route
									index
									element={
										<>
											<Link to='instructions-for-the-test'>Инструкция к тесту</Link>
											<Test2></Test2>
										</>
									}
								/>
								<Route
									path='instructions-for-the-test'
									element={<InstructionsForTheTest id={1} />}
								/>
							</Route>
							<Route
								path='test-3'
								element={<div>test 3</div>}
							/>
						</Routes>
					</Suspense>
				</div>
			</div>
		</>
	)
}

function Test2() {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count => count + 1)
	}

	return (
		<>
			<div className=''>{test2[count]}</div>
			<button
				className='button'
				onClick={() => handleClick()}
			>
				Да
			</button>
			<button
				className='button'
				onClick={() => handleClick()}
			>
				Нет
			</button>
		</>
	)
}

function DashboardInfo() {
	return (
		<>
			<div className='dashboard__info-blocks'>
				<Link to='auth'>
					<button className='dashboard__button button'>Пройти тест</button>
				</Link>
			</div>
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
				</div>

				<Link
					to='../test-1/instructions-for-the-test'
					className='form__link'
				>
					<button className='button form__button'>Далее</button>
				</Link>
			</form>
		</>
	)
}
