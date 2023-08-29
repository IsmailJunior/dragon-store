import { CategoryGroup } from '../components/CategoryGroup'
import { FeatureCardGroup } from '../components/FeatureCardGroup'
export const StorePage = () =>
{
  return (
	<div className='container py-10'>
		<section className='flex mb-10'>
			<CategoryGroup />
	</section>
		<section>
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
			<FeatureCardGroup />
		</section>
	</div>
  )
}
