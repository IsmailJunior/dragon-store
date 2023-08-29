import { FeatureBlock } from '../components/FeatureBlock'
import { FeaturesGroup } from '../components/FeaturesGroup'
export const LandingPage = () =>
{
  return (
	<>
		<FeatureBlock />
		<FeatureBlock />
		<FeatureBlock />
		<div className='mx-3'>
		<FeaturesGroup />
		<FeaturesGroup />
		<FeaturesGroup />
		</div>
	</>
  )
}
