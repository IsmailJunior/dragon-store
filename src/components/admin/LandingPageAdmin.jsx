import { FeatureBlockAdmin} from './FeatureBlockAdmin';
import { FeaturesGroupAdmin} from './FeaturesGroupAdmin';
export const LandingPageAdmin = () =>
{
return (
<>
		<FeatureBlockAdmin />
		<FeatureBlockAdmin />
		<FeatureBlockAdmin />
<div className='mx-3'>
	<FeaturesGroupAdmin />
	<FeaturesGroupAdmin />
	<FeaturesGroupAdmin />
</div>
</>
)
}