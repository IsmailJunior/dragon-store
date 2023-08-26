import { CategoryGroup } from '../components/CategoryGroup'
import { FeatureCardGroup } from '../components/FeatureCardGroup'
import samsung from '../assets/S23Ultra.jpg'
import apple from '../assets/iPhone14ProMaxCard.jpg'
import ipad from '../assets/iPadCard.jpg'
import mexmon from '../assets/MexmonWatchCard.jpg'
import aseries from '../assets/ASeriesCard.jpg'
export const StorePage = () =>
{

	const data = {
		firstSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung,
			invert: false
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple,
			invert: false
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		},
		secondSection: {
		one: {
			title: 'MEXMON M1 WATCH',
			heading: 'Sportage.',
			description: 'From $29.99',
			image: mexmon,
			invert: true
		},
		two: {
			title: 'A Series 2023',
			heading: 'Pro. Beyond.',
			description: 'From $200.',
			image: aseries,
			invert: true
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		},
		thirdSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung,
			invert: false
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple,
			invert: false
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		},
		fourthSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung,
			invert: false
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple,
			invert: false
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		},
		fifthSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung,
			invert: false
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple,
			invert: false
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		},
		sixthSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung,
			invert: false
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple,
			invert: false
			},
		three: {
			title: 'iPad',
			heading: '9th Generation.',
			description: 'From $399.',
			image: ipad,
			invert: true
			},
		}
	}

  return (
	<div className='container py-10'>
		<section className='flex mb-10'>
			<CategoryGroup />
	</section>
		<section>
			<FeatureCardGroup headline='The latest. Take a look at what’s new, right now.' data={{data: data.firstSection}}/>
			<FeatureCardGroup headline='Accessories. Essentials that pair perfectly with your favorite devices.' data={{data: data.secondSection}}/>
			<FeatureCardGroup headline='Loud and clear. Unparalleled choices for rich, high-quality sound.' data={{data: data.thirdSection}}/>
			<FeatureCardGroup headline='Special stores. Exclusive savings for businesses, school, and more.' data={{data: data.fourthSection}}/>
			<FeatureCardGroup headline='Help is here. Whenever and however you need it.' data={{data: data.fifthSection}}/>
			<FeatureCardGroup headline='The Dragon Store difference. Even more reasons to shop with us.' data={{data: data.sixthSection}}/>
		</section>
	</div>
  )
}
