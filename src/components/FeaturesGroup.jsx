import { FeatureBlock } from './FeatureBlock'
export const FeaturesGroup = ({leftDetails, rightDetails}) =>
{
return (
<div className='flex gap-3'>
	<FeatureBlock
	title={ leftDetails?.data?.firstBlock?.title }
	description={ leftDetails?.data?.firstBlock?.description }
	link={ leftDetails?.data?.firstBlock?.link }
	image={ leftDetails?.data?.firstBlock?.image }
	invert={leftDetails?.data?.firstBlock?.invert ? true : false}
	/>
	<FeatureBlock
	title={ rightDetails?.data?.secondBlock?.title }
	description={ rightDetails?.data?.secondBlock?.description }
	link={ rightDetails?.data?.secondBlock?.link }
	image={ rightDetails?.data?.secondBlock?.image }
	invert={rightDetails?.data?.secondBlock?.invert ? true : false}
	/>
</div>
)
}