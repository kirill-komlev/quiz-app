import { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

import { config } from '../../../../config'

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)

	function openModal() {
		let pagePosition = window.scrollY
		let modal = document.getElementById('modal')

		document.body.classList.add('modal-open')

		modal.style.display = 'block'
		modal.style.top = pagePosition + 'px'
	}

	function closeModal() {
		document.body.classList.remove('modal-open')
		modal.style.display = 'none'
	}

	return (
		<>
			<header className='header'>
				<div className='header__inner fullsize-container'>
					<Link
						className='header__logo'
						to='/'
						onClick={() => {
							setHeaderModal(false)
							closeModal()
						}}
					>
						<img
							src={config.logo}
							alt=''
							className='logo logo__image'
						/>
						<p className='header__title'>{config.name}</p>
					</Link>
					<nav className='header__menu hidden-mobile'>
						<ul className='header__menu-list'>
							<li className='header__menu-item'>
								<Link
									className='header__menu-link'
									to='/dashboard'
								>
									Назад на главную
								</Link>
							</li>
						</ul>
						<div className='header__auth'>
							<Link
								className='header__auth-sign-up'
								to='/sign-in'
							>
								<button className='header__button button'>Пройти тест</button>
							</Link>
						</div>
					</nav>
					<Button
						className='header__burger-button button__burger-menu burger-button visible-mobile'
						onClick={() => {
							setHeaderModal(true)
							openModal()
						}}
					/>
				</div>

				<Modal
					className='mobile-overlay visible-mobile'
					open={headerModal}
				>
					<div className='mobile-overlay__header'>
						<Link
							className='header__logo'
							to='/'
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						>
							<img
								src={config.logo}
								alt=''
								className='logo logo__image'
							/>
							<p className='header__title'>{config.name}</p>
						</Link>
						<div className='mobile-overlay__close-button-wrapper'>
							<Button
								className='mobile-overlay__close-button cross-button'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							/>
						</div>
					</div>
					<div className='mobile-overlay__body'>
						<ul className='mobile-overlay__body-list'></ul>
						<div className='mobile-overlay__body-auth'>
							<Link
								className='mobile-overlay__auth-link'
								to='/sign-in'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								<Button className='header__button button button--mobile'>Пройти тест</Button>
							</Link>
						</div>
					</div>
				</Modal>
			</header>
		</>
	)
}
