import { NavLink } from 'react-router-dom'

import logo from '../../../images/logo.svg'
import logo_email from '../../../images/icons/email.svg'
import logo_phone from '../../../images/icons/phone.svg'

export default function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__inner container'>
					<div className='footer__information'>
						<NavLink
							className='footer__logo'
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
							<p className='footer__title'>Quiz app</p>
						</NavLink>
						<p className='footer__text'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque. Dolorum praesentium quasi dolorem dicta illo! Minus provident ad numquam pariatur molestias
							repellendus dolorem, eum in impedit ex dignissimos quas.
						</p>
					</div>

					<div className='footer__useful-links'>
						<h4 className='footer__useful-links--title'>Полезные ссылки</h4>
						<a href='https://tatngpi.ru/'>Сайт НГПУ</a>
					</div>

					<div className='footer__contacts'>
						<h4 className='footer__contacts--title'>Контакты</h4>
						<p className='footer__contacts--text'>
							<img
								className='footer__contacts--logo'
								src={logo_email}
								alt=''
							/>
							youraddress@mail.ru
						</p>
						<p className='footer__contacts--text'>
							<img
								className='footer__contacts--logo'
								src={logo_phone}
								alt=''
							/>
							8 (800) 123 45-67
						</p>
					</div>
				</div>
				{/* Ссылка на сайт, адреса почты, описание, телефон */}
			</footer>
		</>
	)
}
