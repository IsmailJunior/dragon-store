import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ({headline='Headline Description.', data}) => {
	return (
	<div className='flex flex-col gap-6 mb-20'>
			<h1 className='text-3xl font-semibold'>{headline}</h1>		
	<div className='flex gap-5'>	
		<FeatureCard />	
		<FeatureCard />	
		<FeatureCard />	
	</div>
	</div>
  )
}
