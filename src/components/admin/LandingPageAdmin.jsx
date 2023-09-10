import { useSelector } from 'react-redux';
import {selectStatus,selectFeatured} from '../../features/items/itemsSlice'
import { FeatureBlockAdmin} from './FeatureBlockAdmin';
import { FeaturesGroupAdmin} from './FeaturesGroupAdmin';
export const LandingPageAdmin = () =>
{
	const status = useSelector( selectStatus );
	const featured = useSelector( selectFeatured );
	const banners = {
		firstBanner: featured?.banners?.at(0),
		secondBanner: featured?.banners?.at(1),
		thirdBanner: featured?.banners?.at(2)
	}

	const blocks = {
		firstSection: {
		firstBlock: featured?.blocks?.at( 0 ),
		secondBlock: featured?.blocks?.at( 1 ),
		},
		secondSection: {
		firstBlock: {...featured?.blocks?.at( 2 ), invert: true},
		secondBlock: featured?.blocks?.at( 3 ),
		}
	}
return (
<>
		<FeatureBlockAdmin id={banners?.firstBanner?.id} title={ banners?.firstBanner?.name } description={banners?.firstBanner?.description} image={banners?.firstBanner?.banner} link='Shop now >'/>
		<FeatureBlockAdmin id={banners?.secondBanner?.id} title={ banners?.secondBanner?.name } description={banners?.secondBanner?.description} image={banners?.secondBanner?.banner} link='Shop now >'/>
		<FeatureBlockAdmin id={banners?.thirdBanner?.id} title={ banners?.thirdBanner?.name } description={banners?.thirdBanner?.description} image={banners?.thirdBanner?.banner} link='Shop now >'/>
<div className='mx-3'>
	<FeaturesGroupAdmin leftDetails={{data: blocks.firstSection}} rightDetails={{data: blocks.firstSection}}/>
	<FeaturesGroupAdmin leftDetails={{data: blocks.secondSection}} rightDetails={{data: blocks.secondSection}}/>
	<FeaturesGroupAdmin />
</div>
</>
)
}