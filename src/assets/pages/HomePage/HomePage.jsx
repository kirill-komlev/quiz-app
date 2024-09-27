import { NavLink } from 'react-router-dom'

import intro_peoples from '../../../images/intro-peoples.svg'

import Button from '../../components/Button/Button'

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
							>
								<Button className='intro__button button'>Пройти тест</Button>
							</NavLink>
							{/* <NavLink
								className='intro__link'
								to='/about'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								Подробнее
							</NavLink> */}
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
			<section className='about'>
				<div className='about__inner container'>
					<div className='about__information'>
						<h2 className='about__title'>
							Наша методика <br className='hidden-mobile' />
							состоит из
						</h2>
						<p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
					</div>
					<div className='about__stages'>
						<div className='about__block'>
							<p className='about__block-id'>01</p>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
						<div className='about__block'>
							<div className='about__block-id'>02</div>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
						<div className='about__block'>
							<div className='about__block-id'>03</div>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
						<div className='about__block'>
							<div className='about__block-id'>04</div>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
						<div className='about__block'>
							<div className='about__block-id'>05</div>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
						<div className='about__block'>
							<div className='about__block-id'>06</div>
							<h3 className='about__block-title'>Lorem ipsum</h3>
							<p className='about__block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section id='about'>
				<div className='about__inner container'>

				</div>
			</section> */}
		</>
	)
}
