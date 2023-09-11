import { FeatureBlockAdmin } from './FeatureBlockAdmin'
export const FeaturesGroupAdmin = ({data, onLeftClick,onRightClick}) =>
{
return (
<div className='flex gap-3'>
	<FeatureBlockAdmin
	onClick={onLeftClick}
	title={ data?.data?.leftBlock?.name }
	description={ data?.data?.leftBlock?.description }
	link='Shop Now >'
	image={ data?.data?.leftBlock?.block }
	invert={ data?.data?.leftBlock?.invert ? true : false }
	id={data?.data?.leftBlock?.id}
	/>
	<FeatureBlockAdmin
	onClick={onRightClick}	
	title={ data?.data?.rightBlock?.name }
	description={ data?.data?.rightBlock?.description }
	link='Shop Now >'
	image={ data?.data?.rightBlock?.block }
	invert={ data?.data?.rightBlock?.invert ? true : false }
	id={data?.data?.rightBlock?.id}
	/>
</div>
)
}