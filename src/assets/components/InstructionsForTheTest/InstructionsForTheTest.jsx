import { Link } from 'react-router-dom'

import { instructions } from '../../data/test_data'

export default function InstructionsForTheTest({ id }) {
	return (
		<div>
			<p>Инструкция к тесту </p>
			<p>{instructions[id]}</p>
			<Link to='../'>
				<button className='button'>Далее</button>
			</Link>
		</div>
	)
}
