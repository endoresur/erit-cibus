import { PlannerItemCard } from 'types/calendar'

export const weeklyMealPlan: PlannerItemCard[] = [
	{
		id: '2025-06-01',
		date: '2025-06-01'
	},
	{ id: '2025-06-02', date: '2025-06-02' },
	{ id: '2025-06-03', date: '2025-06-03' },
	{ id: '2025-06-04', date: '2025-06-04' },
	{ id: '2025-06-05', date: '2025-06-05' },
	{ id: '2025-06-06', date: '2025-06-06' },
	{ id: '2025-06-07', date: '2025-06-07' },
	{
		id: '2025-06-08',
		date: '2025-06-08',
		breakfast: {
			id: 'day1-breakfast',
			title: 'Овсянка с ягодами',
			description: 'Овсянка на воде с черникой и мёдом'
		}
	},
	{
		id: '2025-06-09',
		date: '2025-06-09',
		breakfast: {
			id: 'day1-breakfast',
			title: 'Овсянка с ягодами',
			description: 'Овсянка на воде с черникой и мёдом'
		},
		lunch: {
			id: 'day1-lunch',
			title: 'Куриная грудка с гречкой',
			description: 'Запечённая куриная грудка и варёная гречка с овощами'
		},
		dinner: {
			id: 'day1-dinner',
			title: 'Тушёные овощи с рисом',
			description: 'Цукини, морковь и болгарский перец с бурым рисом'
		},
		notes: [
			{
				id: 'day1-note1',
				title: 'Покупки на неделю',
				description: 'Курица, рыба, овощи, фрукты, крупы и молочные продукты'
			},
			{
				id: 'day1-note2',
				title: 'Напоминание',
				description: 'Не забыть купить свежие овощи для салатов'
			}
		]
	},
	{
		id: '2025-06-10',
		date: '2025-06-10',
		breakfast: {
			id: 'day2-breakfast',
			title: 'Яичница с тостами',
			description: '2 яйца на сковороде и цельнозерновой тост'
		},
		lunch: {
			id: 'day2-lunch',
			title: 'Салат с тунцом',
			description: 'Салат с тунцом, фасолью, зеленью и оливковым маслом'
		},
		dinner: {
			id: 'day2-dinner',
			title: 'Суп-пюре из тыквы',
			description: 'Тыквенный суп с семенами и сухариками'
		},
		notes: undefined
	},
	{
		id: '2025-06-11',
		date: '2025-06-11',
		breakfast: {
			id: 'day3-breakfast',
			title: 'Смузи из банана и шпината',
			description: 'Банан, шпинат, миндальное молоко и семена чиа'
		},
		lunch: {
			id: 'day3-lunch',
			title: 'Бурый рис с овощами и тофу',
			description: 'Тофу, брокколи и морковь на пару с рисом'
		},
		dinner: {
			id: 'day3-dinner',
			title: 'Овощное рагу',
			description: 'Картофель, кабачок, лук и томаты тушёные в соусе'
		},
		notes: undefined
	},
	{
		id: '2025-06-12',
		date: '2025-06-12',
		breakfast: {
			id: 'day4-breakfast',
			title: 'Гречневая каша с яблоком',
			description: 'Гречка, тушёное яблоко и немного корицы'
		},
		lunch: {
			id: 'day4-lunch',
			title: 'Суп с чечевицей',
			description: 'Чечевичный суп с морковью и сельдереем'
		},
		dinner: {
			id: 'day4-dinner',
			title: 'Курица на пару с картофелем',
			description: 'Филе курицы, картофель и зелень'
		},
		notes: undefined
	},
	{
		id: '2025-06-13',
		date: '2025-06-13',
		breakfast: {
			id: 'day5-breakfast',
			title: 'Творог с мёдом и орехами',
			description: 'Обезжиренный творог, ложка мёда, грецкие орехи'
		},
		lunch: {
			id: 'day5-lunch',
			title: 'Паста из цельнозерновой муки',
			description: 'Паста с томатным соусом, базиликом и курицей'
		},
		dinner: {
			id: 'day5-dinner',
			title: 'Овощи гриль и хумус',
			description: 'Баклажаны, перец, кабачки и хумус'
		},
		notes: undefined
	},
	{
		id: '2025-06-14',
		date: '2025-06-14',
		breakfast: {
			id: 'day6-breakfast',
			title: 'Йогурт с фруктами',
			description: 'Натуральный йогурт с киви и гранолой'
		},
		lunch: {
			id: 'day6-lunch',
			title: 'Бургеры с индейкой',
			description: 'Котлета из индейки, салат, булочка из цельного зерна'
		},
		dinner: {
			id: 'day6-dinner',
			title: 'Салат с киноа',
			description: 'Киноа, авокадо, томаты и лайм'
		},
		notes: undefined
	},
	{
		id: '2025-06-15',
		date: '2025-06-15',
		breakfast: {
			id: 'day7-breakfast',
			title: 'Панкейки с бананом',
			description: 'Панкейки на овсяной муке и банане'
		},
		lunch: {
			id: 'day7-lunch',
			title: 'Овощной суп',
			description: 'Суп с картофелем, капустой и морковью'
		},
		dinner: {
			id: 'day7-dinner',
			title: 'Гречка с грибами',
			description: 'Гречневая каша с обжаренными шампиньонами и луком'
		},
		notes: undefined
	},
	{ id: '2025-06-16', date: '2025-06-16' },
	{ id: '2025-06-17', date: '2025-06-17' },
	{ id: '2025-06-18', date: '2025-06-18' },
	{ id: '2025-06-19', date: '2025-06-19' },
	{ id: '2025-06-20', date: '2025-06-20' },
	{ id: '2025-06-21', date: '2025-06-21' },
	{ id: '2025-06-22', date: '2025-06-22' },
	{ id: '2025-06-23', date: '2025-06-23' },
	{ id: '2025-06-24', date: '2025-06-24' },
	{ id: '2025-06-25', date: '2025-06-25' },
	{ id: '2025-06-26', date: '2025-06-26' },
	{ id: '2025-06-27', date: '2025-06-27' },
	{ id: '2025-06-28', date: '2025-06-28' },
	{ id: '2025-06-29', date: '2025-06-29' },
	{ id: '2025-06-30', date: '2025-06-30' }
]
