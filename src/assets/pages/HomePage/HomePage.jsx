import { NavLink } from 'react-router-dom'

import intro_peoples from '../../../images/intro-peoples.svg'

import Button from '../../components/Button/Button'
import AboutBlock from '../../components/AboutBlock/AboutBlock'
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock'

import { about, advantages } from '../../data/data'

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
						<h2 className='about__title'>Наша методика состоит из</h2>
						<p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.</p>
					</div>
					<div className='about__list'>
						<AboutData />
					</div>
				</div>
			</section>
			<section className='advantages'>
				<div className='advantages__inner container'>
					<h2 className='advantages__title'>Преимущества методики</h2>
					<div className='advantages__list'>
						<AdvantagesData></AdvantagesData>
					</div>
				</div>
			</section>
			
		</>
	)

	function AboutData() {
		let listItems = []
		for (let i = 0; i < about.length; i++) {
			listItems.push(
				<AboutBlock
					key={i}
					id={i + 1}
					title={about[i].title}
					text={about[i].text}
				/>
			)
		}
		return listItems
	}

	function AdvantagesData() {
		let listItems = []
		for (let i = 0; i < advantages.length; i++) {
			listItems.push(
				<AdvantagesBlock
					key={i}
					img_src={advantages[i].img}
					title={advantages[i].title}
					text={advantages[i].text}
				/>
			)
		}
		return listItems
	}
}
