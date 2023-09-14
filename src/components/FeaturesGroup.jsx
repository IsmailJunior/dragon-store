import { FeatureBlock } from './FeatureBlock'
export const FeaturesGroup = ({data}) =>
{
return (
<div className='flex gap-3'>
	<FeatureBlock
	title={ data?.data?.leftBlock?.name }
	description={ data?.data?.leftBlock?.description }
	link='Shop Now >'
	image={ data?.data?.leftBlock?.block }
	invert={ data?.data?.leftBlock?.invertText ? true : false }
	id={data?.data?.leftBlock?.id}
	/>
	<FeatureBlock
	title={ data?.data?.rightBlock?.name }
	description={ data?.data?.rightBlock?.description }
	link='Shop Now >'
	image={ data?.data?.rightBlock?.block }
	invert={ data?.data?.rightBlock?.invertText ? true : false }
	id={data?.data?.rightBlock?.id}
	/>
</div>
)
}