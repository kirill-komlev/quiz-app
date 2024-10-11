import { NavLink } from 'react-router-dom'

export default function AuthorizationPage() {
	return (
		<>
			<div className='authorization'>
				<div className='authorization__inner container'>
					<form
						action=''
						className='authorization__form'
					>
						<h2 className='form__title'>Авторизация</h2>
						<div className='form__blocks'>
							<label
								htmlFor='login'
								className='form__login-title'
							>
								Почта
							</label>
							<input
								type='text'
								className='form__login'
								id='login'
								placeholder='513223423546'
							/>
							<label
								htmlFor='password'
								className='form__password-title'
							>
								Пароль
							</label>
							<input
								type='password'
								className='form__password'
								id='password'
								placeholder='*********'
							/>
						</div>
						<button className='form__button button'>
							<NavLink>Авторизоваться</NavLink>
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
