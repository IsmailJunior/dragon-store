import { useSelector } from 'react-redux'
import {selectItems,selectStatus,selectFeatured} from '../features/items/itemsSlice'
import { FeatureBlock } from '../components/FeatureBlock';
import { FeaturesGroup } from '../components/FeaturesGroup'
export const LandingPage = () =>
{
	const status = useSelector( selectStatus );
	const featured = useSelector( selectFeatured );
	const items = useSelector( selectItems );

	console.log(featured)

return (
<>
<FeatureBlock description={items[0]?.description} title={items[0]?.name} image={items[0]?.banner} link='Shop now >' />
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