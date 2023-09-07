import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ({headline='Headline Description.', data}) => {
return (
<div className='flex flex-col gap-6 mb-20'>
	<h1 className='text-3xl font-semibold'>{headline}</h1>
	<div className='flex gap-5'>	
		<FeatureCard
		title={ data?.item?.name }
		heading={ data?.item?.description }
		price={ data?.item?.price }
		image={ data?.item?.card }
		invert={data?.data?.one?.invert}
		/>	
		<FeatureCard
		title={ data?.data?.two?.title }
		heading={ data?.data?.two?.heading }
		price={ data?.data?.two?.price }
		image={ data?.data?.two?.image }
		invert={data?.data?.two?.invert}
		/>	
		<FeatureCard
		title={ data?.data?.three?.title }
		heading={ data?.data?.three?.heading }
		description={ data?.data?.three?.description }
		image={ data?.data?.three?.image }
		invert={data?.data?.three?.invert}
		/>	
	</div>
</div>
)
}