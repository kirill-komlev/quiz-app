import { useState } from 'react'
import { Link } from 'react-router-dom'

import { test1key, speciality } from '../../data/test_data'

export default function Test1() {
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
					Тест окончен
					<br />
					<Link to='../test-2/instructions-for-the-test'>
						<button className='button'>Далее</button>
					</Link>
				</p>
			) : (
				<>
					<div className='test'>
						<div className='test__inner'>
							<div className='test__instruction'>
								<Link to='instructions-for-the-test'>Инструкция к тесту</Link>
							</div>
							<h2 className='test__title'>
								Вопрос <mark>{count + 1}</mark> из {test1key.length}
							</h2>
							<p className='test__text'>Выберите подходящую специальность</p>
							<div className='test__list'>
								{test1key[count].map(num => (
									<div
										key={num}
										className='test__block'
										onClick={() => handleClick(speciality[num].name)}
									>
										<img
											className='test__block--img'
											src={new URL('../../../images/speciality/Географ.png', import.meta.url).href}
											alt=''
										/>
										<h2 className='test__block--name'>{speciality[num].name}</h2>
									</div>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
