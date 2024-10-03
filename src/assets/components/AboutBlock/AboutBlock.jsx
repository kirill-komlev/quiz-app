export default function AboutBlock({ id, title, text }) {
	return (
		<>
			<div className='about__block'>
				<p className='about__block-id'>{id}</p>
				<h3 className='about__block-title'>{title}</h3>
				<p className='about__block-text'>{text}</p>
			</div>
		</>
	)
}
