
import {useSelector} from 'react-redux'
import { selectLanding } from '../features/items/itemsSlice';
import { FeatureBlock } from '../components/FeatureBlock';
import { FeaturesGroup } from '../components/FeaturesGroup'
export const LandingPage = () =>
{
	const landing = useSelector( selectLanding );
return (
<>
	<FeatureBlock title={landing?.banners?.firstBanner.name} description={landing?.banners?.firstBanner.description} image={landing?.banners?.firstBanner.banner} id={landing?.banners?.firstBanner.id} link='Shop Now >'/>
	<FeatureBlock title={landing?.banners?.secondBanner.name} description={landing?.banners?.secondBanner.description} image={landing?.banners?.secondBanner.banner} id={landing?.banners?.secondBanner.id} link='Shop Now >'/>
	<FeatureBlock title={landing?.banners?.thirdBanner.name} description={landing?.banners?.thirdBanner.description} image={landing?.banners?.thirdBanner.banner} id={landing?.banners?.thirdBanner.id} link='Shop Now >'/>
<div className='mx-3'>
	<FeaturesGroup data={{data: landing?.blocks?.firstSection}}/>
	<FeaturesGroup data={{data: landing?.blocks?.secondSection}}/>
	<FeaturesGroup data={{data: landing?.blocks?.thirdSection}}/>
</div>
</>
)
}