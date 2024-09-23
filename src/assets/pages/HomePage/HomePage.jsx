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
							<NavLink
								className='intro__link'
								to='/auth/sign-up'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								<button className='intro__button button'>Пройти тест</button>
							</NavLink>
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
					<div className='intro__background'>
						<img
							src={intro_peoples}
							alt=''
						/>
					</div>
				</div>
			</div>
			{/* <section id='about'>
				<div className='about__inner container'>

				</div>
			</section> */}
		</>
	)
}
