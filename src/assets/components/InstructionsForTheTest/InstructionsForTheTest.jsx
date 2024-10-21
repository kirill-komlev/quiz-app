import { Link } from 'react-router-dom'

import { instructions } from '../../data/test_data'

export default function InstructionsForTheTest({ id }) {
	return (
		<div className='instructions'>
			<div className='instructions__inner'>
				<h2 className='instructions__title'>Инструкция к тесту {id + 1}</h2>
				<p className='instructions__text'>{instructions[id]}</p>
				<Link to='../'>
					<button className='button instructions__button'>Далее</button>
				</Link>
			</div>
		</div>
	)
}
