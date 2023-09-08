import { useSelector } from 'react-redux'
import {selectStatus,selectFeatured} from '../features/items/itemsSlice'
import { FeatureBlock } from '../components/FeatureBlock';
import { FeaturesGroup } from '../components/FeaturesGroup'
export const LandingPage = () =>
{
	const status = useSelector( selectStatus );
	const featured = useSelector( selectFeatured );

	const banners = {
		firstBanner: featured?.banners?.at(0),
		secondBanner: featured?.banners?.at(1),
		thirdBanner: featured?.banners?.at(2)
	}
return (
<>
		<FeatureBlock title={ banners?.firstBanner?.name } description={banners?.firstBanner?.description} image={banners?.firstBanner?.banner} link='Shop now >'/>
		<FeatureBlock title={ banners?.secondBanner?.name } description={banners?.secondBanner?.description} image={banners?.secondBanner?.banner} link='Shop now >'/>
		<FeatureBlock />
<div className='mx-3'>
	<FeaturesGroup />
	<FeaturesGroup />
	<FeaturesGroup />
</div>
</>
)
}