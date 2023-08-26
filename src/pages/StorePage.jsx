import { CategoryGroup } from '../components/CategoryGroup'
import { FeatureCardGroup } from '../components/FeatureCardGroup'
import samsung from '../assets/S23Ultra.jpg'
import apple from '../assets/iPhone14ProMaxCard.jpg'
export const StorePage = () =>
{

	const data = {
		firstSection: {
		one: {
			title: 'S23 ULTRA',
			heading: '200MP Camera.',
			description: 'From $999.',
			image: samsung
		},
		two: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple
			},
		three: {
			title: 'IPHONE 14 PRO',
			heading: 'Pro. Beyond.',
			description: 'From $999.',
			image: apple
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
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
		</section>
	</div>
  )
}
