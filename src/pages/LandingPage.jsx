
import {useSelector} from 'react-redux'
import { selectLanding,selectGetLandingStatus} from '../features/items/itemsSlice';
import { FeatureBlock } from '../components/FeatureBlock';
import { FeaturesGroup } from '../components/FeaturesGroup'
import { Oval } from "react-loader-spinner";

export const LandingPage = () =>
{
	const getLandingStatus = useSelector( selectGetLandingStatus );
	const landing = useSelector( selectLanding );
	return (	
	<>
	{ getLandingStatus === 'success' ? <>
	<FeatureBlock title={landing?.banners?.firstBanner?.name} description={landing?.banners?.firstBanner?.description} image={landing?.banners?.firstBanner?.banner} id={landing?.banners?.firstBanner?.id} invert={landing?.banners?.firstBanner?.invertText} link='تسوق الان >'/>
	<FeatureBlock title={landing?.banners?.secondBanner?.name} description={landing?.banners?.secondBanner?.description} image={landing?.banners?.secondBanner?.banner} id={landing?.banners?.secondBanner?.id} invert={landing?.banners?.secondBanner?.invertText} link='تسوق الان >'/>
	<FeatureBlock title={landing?.banners?.thirdBanner?.name} description={landing?.banners?.thirdBanner?.description} image={landing?.banners?.thirdBanner?.banner} id={landing?.banners?.thirdBanner?.id} invert={landing?.banners?.thirdBanner?.invertText} link='تسوق الان >'/>
<div className='md:mx-2'>
	<FeaturesGroup data={{data: landing?.blocks?.firstSection}}/>
	<FeaturesGroup data={{data: landing?.blocks?.secondSection}}/>
	<FeaturesGroup data={{data: landing?.blocks?.thirdSection}}/>
</div>
	</> : <div className="flex justify-center items-center h-96">
		<Oval secondaryColor="black" color="white" />
	</div>
	
	}

</>
)
}