export default function SpecialistsBlock({ img_src, name, experience, education }) {
	return (
		<>
			<div className='specialists__block'>
				<img
					src={img_src}
					alt=''
					className='specialists__block--avatar'
				/>
				<h3 className='specialists__block--name'>{name}</h3>
				<p className='specialists__block--experience'>
					<span>Общий стаж:</span> {experience}
				</p>
				<p className='specialists__block--education'>
					<span>Образование:</span> {education}
				</p>
			</div>
		</>
	)
}
