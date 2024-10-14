import { Link } from 'react-router-dom'

import { config } from '../../../../config'
import logo_email from '../../../images/icons/email.svg'
import logo_phone from '../../../images/icons/phone.svg'

export default function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__inner fullsize-container'>
					<div className='footer__information'>
						<Link
							className='footer__logo'
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
							<p className='footer__title'>{config.name}</p>
						</Link>
						<p className='footer__text'>{config.description}</p>
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
							{config.email}
						</p>
						<p className='footer__contacts--text'>
							<img
								className='footer__contacts--logo'
								src={logo_phone}
								alt=''
							/>
							{config.tel}
						</p>
					</div>
				</div>
				{/* Ссылка на сайт, адреса почты, описание, телефон */}
			</footer>
		</>
	)
}
