
import {useDispatch, useSelector} from 'react-redux'
import { selectLanding } from '../../features/items/itemsSlice';
import { FeatureBlockAdmin } from './FeatureBlockAdmin';
import { FeaturesGroupAdmin } from './FeaturesGroupAdmin'
export const LandingPageAdmin = () =>
{
	const dispatch = useDispatch();
	const landing = useSelector( selectLanding );
return (
<>
	<FeatureBlockAdmin title={landing?.banners?.firstBanner.name} description={landing?.banners?.firstBanner.description} image={landing?.banners?.firstBanner.banner} id={landing?.banners?.firstBanner.id} link='Shop Now >'/>
	<FeatureBlockAdmin title={landing?.banners?.secondBanner.name} description={landing?.banners?.secondBanner.description} image={landing?.banners?.secondBanner.banner} id={landing?.banners?.secondBanner.id} link='Shop Now >'/>
	<FeatureBlockAdmin title={landing?.banners?.thirdBanner.name} description={landing?.banners?.thirdBanner.description} image={landing?.banners?.thirdBanner.banner} id={landing?.banners?.thirdBanner.id} link='Shop Now >'/>
<div className='mx-3'>
	<FeaturesGroupAdmin data={{data: landing?.blocks?.firstSection}}/>
	<FeaturesGroupAdmin data={{data: landing?.blocks?.secondSection}}/>
	<FeaturesGroupAdmin data={{data: landing?.blocks?.thirdSection}}/>
</div>
</>
)
}