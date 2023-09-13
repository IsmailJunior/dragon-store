
import {FeatureCardAdmin} from './FeatureCardAdmin'
export const FeatureCardGroupAdmin = ({headline='Headline Description.', data}) => {
return (
<div className='flex flex-col gap-6 mb-20'>
	<h1 className='text-3xl font-semibold'>{headline}</h1>
	<div className='flex gap-5'>	
		<FeatureCardAdmin
		title={ data?.firstCard?.name }
		heading={ data?.firstCard?.description }
		price={ data?.firstCard?.price }
		image={ data?.firstCard?.card }
		id={ data?.firstCard?.id }
		invert={data?.firstCard?.invertText}		
		/>	
		<FeatureCardAdmin
		title={ data?.secondCard?.name }
		heading={ data?.secondCard?.description }
		price={ data?.secondCard?.price }
		image={ data?.secondCard?.card }
		id={data?.secondCard?.id}
		invert={data?.secondCard?.invertText}
		/>	
		<FeatureCardAdmin
		title={ data?.thirdCard?.name }
		heading={ data?.thirdCard?.description }
		price={ data?.thirdCard?.price }
		image={ data?.thirdCard?.card }
		id={data?.thirdCard?.id}
		invert={data?.thirdCard?.invertText}
		/>	
	</div>
</div>
)
}