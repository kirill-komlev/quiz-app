import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Loading from '../../components/Loading/Loading'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

import { test1key, speciality } from '../../data/test_data'

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
							<Route
								path='instructions-for-the-test'
								element={<div>Инструкция к тесту</div>}
							/>

							<Route
								path='test-1'
								element={<Test1></Test1>}
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
			</div>
		</>
	)
}

function Test1() {
	const [count, setCount] = useState(40)
	const [showEnd, setShowEnd] = useState(false)

	const [result, setResult] = useState([])

	const handleClick = code => {
		if (count + 1 < test1key.length) {
			result.push(code)
			setCount(count => count + 1)
			console.log(result)
		} else {
			result.push(code)
			setShowEnd(true)
			console.log(result)
		}
	}

	return (
		<>
			{showEnd ? (
				<p>
					Тест окончен <br />
				</p>
			) : (
				<>
					<h3>
						Вопрос {count + 1} из {test1key.length}
					</h3>
					{test1key[count].map(num => (
						<button
							key={num}
							className='button'
							onClick={() => handleClick(speciality[num].name)}
						>
							{speciality[num].name}
						</button>
					))}
				</>
			)}
		</>
	)
}

function DashboardInfo() {
	return (
		<>
			<div className='dashboard__info-blocks'>
				<Link to='instructions-for-the-test'>Инструкция к тесту</Link>
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
					to='../test-1'
					className='form__link'
				>
					<button className='button form__button'>Далее</button>
				</Link>
			</form>
		</>
	)
}
