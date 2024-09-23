import { NavLink } from 'react-router-dom'

import intro_peoples from '../../../images/intro-peoples.svg'

export default function HomePage() {
	return (
		<>
			<div className='intro'>
				<div className='intro__inner container'>
					<div className='intro__text'>
						<h1 className='intro__title'>
							Найди свою <mark>профессию</mark> прямо cейчас
						</h1>
						<p className='intro__subtitle'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</p>
						<div className='intro__introduction'>
							<button className='intro__button button'>
								<NavLink
									className='intro__link'
									to='/'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Пройти тест
								</NavLink>
							</button>
							<NavLink
								className='intro__link'
								to='/about'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								Подробнее
							</NavLink>
						</div>
					</div>
					<img
						className='intro__background'
						src={intro_peoples}
						alt=''
					/>
				</div>
			</div>
		</>
	)
}
