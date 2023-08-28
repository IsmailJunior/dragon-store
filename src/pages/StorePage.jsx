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
import redmipro from '../assets/RedmiNote8ProCard.jpg'
import honorx from '../assets/HonorX8Card.jpg'
export const StorePage = () =>
{

	const data = {
		firstSection: {
		one: {
			title: 's23 ultra',
			heading: '200MP camera',
			description: '999',
			image: samsung,
			invert: false
		},
		two: {
			title: 'iphone 14 pro max',
			heading: 'pro. beyond',
			description: '999',
			image: apple,
			invert: false
			},
		three: {
			title: 'ipad',
			heading: '9th generation',
			description: '399',
			image: ipad,
			invert: true
			},
		},
		secondSection: {
		one: {
			title: 'mexmon m1 watch',
			heading: 'sportage',
			description: '29.99',
			image: mexmon,
			invert: true
		},
		two: {
			title: 'a series 2023',
			heading: 'for everyone',
			description: '200',
			image: aseries,
			invert: true
			},
		three: {
			title: 'tecno spark 10 pro',
			heading: '32MP selfie',
			description: '149.99',
			image: tecno,
			invert: false
			},
		},
		thirdSection: {
		one: {
			title: 'infinix smart 7hd',
			heading: 'super massive storage',
			description: '89.99',
			image: infinix,
			invert: true
		},
		two: {
			title: 'realme c55',
			heading: 'better performing camera',
			description: '99.99',
			image: realme,
			invert: false
			},
		three: {
			title: 'redmi note 11',
			heading: 'rise to the challenge',
			description: '149.99',
			image: redmi,
			invert: true
			},
		},
		fourthSection: {
		one: {
			title: 'oppo a16',
			heading: '5000mAh long-lasting battery',
			description: '84.99',
			image: oppo,
			invert: true
		},
		two: {
			title: 'redmi a10',
			heading: '6.53” HD+ dot drop display',
			description: '89.99',
			image: redmia,
			invert: true
			},
		three: {
			title: 'redmi note 9',
			heading: 'lightweight',
			description: '79.99',
			image: redmin,
			invert: true
			},
		},
		fifthSection: {
		one: {
			title: 'redmi 9t',
			heading: 'powerfull colors',
			description: '89.99',
			image: redmit,
			invert: true
		},
		two: {
			title: 'redmi 9',
			heading: 'anyone can get it',
			description: '59.99',
			image: redmib,
			invert: true
			},
		three: {
			title: 'redmi 7 pro',
			heading: 'value with power',
			description: '49.99',
			image: redmip,
			invert: true
			},
		},
		sixthSection: {
		one: {
			title: 'honor x6a',
			heading: 'new colors',
			description: '169.99',
			image: honor,
			invert: true
		},
		two: {
			title: 'redmi note 8 pro',
			heading: 'quality and preformence',
			description: '69.99',
			image: redmipro,
			invert: true
			},
		three: {
			title: 'honor x8',
			heading: 'eXtra Elegance, eXtra Vision',
			description: '139.99',
			image: honorx,
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
