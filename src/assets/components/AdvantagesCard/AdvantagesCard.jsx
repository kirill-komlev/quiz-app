import { images } from '../../data/data'

export default function AdvantagesCard({ img_src, title, text }) {
	return (
		<div className='advantages__card'>
			<img
				src={img_src}
				alt=''
				className='advantages__card-icon'
			/>
			<h3 className='advantages__card-title'>{title}</h3>
			<p className='advantages__card-text'>{text} </p>
		</div>
	)
}
