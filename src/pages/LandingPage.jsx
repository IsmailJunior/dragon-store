import { useSelector } from 'react-redux'
import {selectItems,selectStatus,selectFeatured} from '../features/items/itemsSlice'
import { FeatureBlock } from '../components/FeatureBlock';
import { FeaturesGroup } from '../components/FeaturesGroup'
export const LandingPage = () =>
{
	const status = useSelector( selectStatus );
	const featured = useSelector( selectFeatured );
return (
<>
<FeatureBlock description={featured?.banners?.at(0)?.description} title={featured?.banners?.at(0).name} image={featured?.banners?.at(0)?.banner} link='Shop now >' />
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