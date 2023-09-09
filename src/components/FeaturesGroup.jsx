import { FeatureBlock } from './FeatureBlock'
export const FeaturesGroup = ({leftDetails, rightDetails}) =>
{
return (
<div className='flex gap-3'>
	<FeatureBlock
	title={ leftDetails?.data?.firstBlock?.name }
	description={ leftDetails?.data?.firstBlock?.description }
	link={ leftDetails?.data?.firstBlock?.link }
	image={ leftDetails?.data?.firstBlock?.block }
	invert={ leftDetails?.data?.firstBlock?.invert ? true : false }
	id={leftDetails?.data?.firstBlock?.id}
	/>
	<FeatureBlock
	title={ rightDetails?.data?.secondBlock?.name }
	description={ rightDetails?.data?.secondBlock?.description }
	link={ rightDetails?.data?.secondBlock?.link }
	image={ rightDetails?.data?.secondBlock?.block }
	invert={ rightDetails?.data?.secondBlock?.invert ? true : false }
	id={rightDetails?.data?.secondBlock?.id}
	/>
</div>
)
}