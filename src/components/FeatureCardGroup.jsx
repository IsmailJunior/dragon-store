import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ({headline='Headline Description.', data}) => {
return (
<div className='flex flex-col gap-6 mb-20'>
	<h1 className='text-3xl font-semibold'>{headline}</h1>
	<div className='flex gap-5'>	
		<FeatureCard
		title={ data?.firstCard?.name }
		heading={ data?.firstCard?.description }
		price={ data?.firstCard?.price }
		image={ data?.firstCard?.card }
		id={ data?.firstCard?.id }	
		invert={ data?.firstCard?.invertText }			
		/>	
		<FeatureCard
		title={ data?.secondCard?.name }
		heading={ data?.secondCard?.description }
		price={ data?.secondCard?.price }
		image={ data?.secondCard?.card }
		id={ data?.secondCard?.id }	
		invert={data?.secondCard?.invertText}		
		/>	
		<FeatureCard
		title={ data?.thirdCard?.name }
		heading={ data?.thirdCard?.description }
		price={ data?.thirdCard?.price }
		image={ data?.thirdCard?.card }
		id={ data?.thirdCard?.id }	
		invert={data?.thirdCard?.invertText}		
		/>	
	</div>
</div>
)
}