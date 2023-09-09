import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ({headline='Headline Description.', data}) => {
return (
<div className='flex flex-col gap-6 mb-20'>
	<h1 className='text-3xl font-semibold'>{headline}</h1>
	<div className='flex gap-5'>	
		<FeatureCard
		title={ data?.at(0)?.name }
		heading={ data?.at(0)?.description }
		price={ data?.at(0)?.price }
		image={ data?.at(0)?.card }
		invert={data?.at(0)?.invert}
		/>	
		<FeatureCard
		title={ data?.at(1)?.name }
		heading={ data?.at(1)?.description }
		price={ data?.at(1)?.price }
		image={ data?.at(1)?.card }
		invert={data?.at(1)?.invert}
		/>	
		<FeatureCard
		title={ data?.at(2)?.name }
		heading={ data?.at(2)?.description }
		description={ data?.at(2)?.price }
		image={ data?.at(2)?.card }
		invert={data?.at(2)?.invert}
		/>	
	</div>
</div>
)
}