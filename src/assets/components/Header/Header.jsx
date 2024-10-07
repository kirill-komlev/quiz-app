import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

import logo from '../../../images/logo.svg'

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
				<div className='header__inner container'>
					<NavLink
						className='header__logo'
						to='/'
						onClick={() => {
							setHeaderModal(false)
							closeModal()
						}}
					>
						<img
							src={logo}
							alt=''
							className='logo logo__image'
						/>
						<p className='header__title'>Quiz app</p>
					</NavLink>
					<nav className='header__menu hidden-mobile'>
						{/* <ul className='header__menu-list'>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/about'
								>
									О проекте
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/specialists'
								>
									Специалисты
								</NavLink>
							</li>
						</ul> */}
						<div className='header__auth'>
							{/* <NavLink
								className='header__auth-sign-in'
								to='/auth/sign-in'
							>
								Войти
							</NavLink> */}
							<NavLink
								className='header__auth-sign-up'
								to='/sign-in'
							>
								<button className='header__button button'>Пройти тест</button>
							</NavLink>
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
						<NavLink
							className='header__logo'
							to='/'
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						>
							<img
								src={logo}
								alt=''
								className='logo logo__image'
							/>
							<p className='header__title'>Quiz app</p>
						</NavLink>
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
						<ul className='mobile-overlay__body-list'>
							{/* <li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Главная
								</NavLink>
							</li> */}
							{/* <li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/about'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									О проекте
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/specialists'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Специалисты
								</NavLink>
							</li> */}
						</ul>
						<div className='mobile-overlay__body-auth'>
							{/* <NavLink
								className='mobile-overlay__auth-link'
								to='/auth/sign-in'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								Войти
							</NavLink> */}
							<NavLink
								className='mobile-overlay__auth-link'
								to='/sign-in'
								onClick={() => {
									setHeaderModal(false)
									closeModal()
								}}
							>
								<Button className='header__button button button--mobile'>Пройти тест</Button>
							</NavLink>
						</div>
					</div>
				</Modal>
			</header>
		</>
	)
}
