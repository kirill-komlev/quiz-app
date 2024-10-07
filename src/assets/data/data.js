export const icon = {
	flag: new URL('../../images/advantages/icon-flag.svg', import.meta.url).href,
	star: new URL('../../images/advantages/icon-star.svg', import.meta.url).href,
}

export const avatar = {
	IvanIvanov: new URL('../../images/specialists/Ivan-Ivanov.jpg', import.meta.url).href,
	KirillKuznetsov: new URL('../../images/specialists/Kirill-Kuznetsov.jpg', import.meta.url).href,
}

export const about = [
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
	{ title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nisl dui, non sollicitudin risus dignissim eu.' },
]

export const advantages = [
	{
		img: icon.flag,
		title: 'Методика разработана',
		text: ' научным советом педагогического университета.',
	},
	{
		img: icon.flag,
		title: 'Методика соответствует',
		text: ' Российским стандартам профориентационного тестирования.',
	},
	{
		img: icon.flag,
		title: 'Консультанты –',
		text: ' профессиональные психологи с многолетним стажем профориентационной работы с подростками.',
	},
]

export const specialists = [
	{
		img: avatar.IvanIvanov,
		name: 'Иван Иванов',
		experience: '5 лет',
		education: 'окончил МПГУ (бывший МГПИ им. В.И. Ленина). Имеет научную степень кандидата психологических наук (Институт психологии РАН). Имеет звание доцента.',
	},
	{
		img: avatar.KirillKuznetsov,
		name: 'Кирилл Кузнецов',
		experience: '7 лет',
		education: 'МГППУ, МГУ им. Ломоносова. Кандидат психологических наук, диссертация на тему развития самостоятельности в планировании личных профессиональных перспектив.',
	},
	{
		img: avatar.IvanIvanov,
		name: 'Иван Иванов',
		experience: '9 лет',
		education: 'окончил МПГУ (бывший МГПИ им. В.И. Ленина). Имеет научную степень кандидата психологических наук (Институт психологии РАН). Имеет звание доцента.',
	},
	{
		img: avatar.KirillKuznetsov,
		name: 'Кирилл Кузнецов',
		experience: '17 лет',
		education: 'МГППУ, МГУ им. Ломоносова. Кандидат психологических наук, диссертация на тему развития самостоятельности в планировании личных профессиональных перспектив.',
	},
]
