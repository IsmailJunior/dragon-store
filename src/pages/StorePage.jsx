import { CategoryGroup } from '../components/CategoryGroup'
import { FeatureCardGroup } from '../components/FeatureCardGroup'
import samsung from '../assets/S23Ultra.jpg'
import apple from '../assets/iPhone14ProMaxCard.jpg'
import ipad from '../assets/iPadCard.jpg'
import mexmon from '../assets/MexmonWatchCard.jpg'
import aseries from '../assets/ASeriesCard.jpg'
import tecno from '../assets/TecnoSpark10ProCard.jpg'
import infinix from '../assets/InfinixSmart7Card.jpg'
import realme from '../assets/RealmeC55Card.jpg'
import redmi from '../assets/RedmiNote11Card.jpg'
import oppo from '../assets/OppoA16Card.jpg'
import redmia from '../assets/Redmi10ACard.jpg'
import redmin from '../assets/RedmiNote9Card.jpg'
import redmit from '../assets/Redmi9TCard.jpg'
import redmib from '../assets/Redmi9Card.jpg'
import redmip from '../assets/Redmi7ProCard.jpg'
import honor from '../assets/HonorX6ACard.jpg'
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
			title: 'A SERIERS 2023',
			heading: 'For Everyone.',
			description: 'From $200.',
			image: aseries,
			invert: true
			},
		three: {
			title: 'TECNO SPARK 10 PRO',
			heading: '32MP Selfie.',
			description: 'From $149.99',
			image: tecno,
			invert: false
			},
		},
		thirdSection: {
		one: {
			title: 'INFINIX SMART 7 HD',
			heading: 'Super Massive Storage.',
			description: 'From $89.99',
			image: infinix,
			invert: true
		},
		two: {
			title: 'REALME C55',
			heading: 'Better Performing Camera.',
			description: 'From $99.99',
			image: realme,
			invert: false
			},
		three: {
			title: 'REDMI NOTE 11',
			heading: 'Rise to The Challenge.',
			description: 'From $149.99',
			image: redmi,
			invert: true
			},
		},
		fourthSection: {
		one: {
			title: 'OPPO A16',
			heading: '5000mAh Long-lasting Battery.',
			description: 'From $84.99',
			image: oppo,
			invert: true
		},
		two: {
			title: 'REDMI 10A',
			heading: '6.53” HD+ Dot Drop display.',
			description: 'From $89.99',
			image: redmia,
			invert: true
			},
		three: {
			title: 'REDMI NOTE 9',
			heading: 'Lightweight.',
			description: 'From $79.99',
			image: redmin,
			invert: true
			},
		},
		fifthSection: {
		one: {
			title: 'REDMI 9T',
			heading: 'Powerfull Colors',
			description: 'From $89.99',
			image: redmit,
			invert: true
		},
		two: {
			title: 'REDMI 9',
			heading: 'Anyone Can Get It.',
			description: 'From $59.99',
			image: redmib,
			invert: true
			},
		three: {
			title: 'REDMI 7 PRO',
			heading: 'Value With Power',
			description: 'From $49.99',
			image: redmip,
			invert: true
			},
		},
		sixthSection: {
		one: {
			title: 'HONOR X6A',
			heading: 'New Colors',
			description: 'From $169.99',
			image: honor,
			invert: true
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
