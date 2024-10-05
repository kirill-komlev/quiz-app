

export default function AdvantagesBlock({ img_src, title, text }) {
	return (
		<div className='advantages__block'>
			<img
				src={img_src}
				alt=''
				className='advantages__block-icon'
			/>
			<h3 className='advantages__block-title'>{title}</h3>
			<p className='advantages__block-text'>{text} </p>
		</div>
	)
}
