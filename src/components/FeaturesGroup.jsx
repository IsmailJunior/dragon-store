import { FeatureBlock } from './FeatureBlock'
export const FeaturesGroup = ({data}) =>
{
return (
<div className='flex flex-col md:flex-row md:gap-2'>
	<FeatureBlock
	title={ data?.data?.leftBlock?.name }
	description={ data?.data?.leftBlock?.description }
	link='تسوق الان >'
	image={ data?.data?.leftBlock?.block }
	invert={ data?.data?.leftBlock?.invertText ? true : false }
	id={data?.data?.leftBlock?.id}
	/>
	<FeatureBlock
	title={ data?.data?.rightBlock?.name }
	description={ data?.data?.rightBlock?.description }
	link='تسوق الان >'
	image={ data?.data?.rightBlock?.block }
	invert={ data?.data?.rightBlock?.invertText ? true : false }
	id={data?.data?.rightBlock?.id}
	/>
</div>
)
}