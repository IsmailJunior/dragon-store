import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ({headline='Headline Description.', data}) => {
	return (
	<div className='flex flex-col gap-6 mb-20'>
			<h1 className='text-3xl font-semibold'>{headline}</h1>		
	<div className='flex gap-5'>	
				<FeatureCard
					title={ data?.data?.one?.title }
					heading={ data?.data?.one?.heading }
					description={ data?.data?.one?.description }
					image={data?.data?.one?.image}
				/>	
				<FeatureCard
					title={ data?.data?.two?.title }
					heading={ data?.data?.two?.heading }
					description={ data?.data?.two?.description }
					image={data?.data?.two?.image}
				/>	
				<FeatureCard
					title={ data?.data?.two?.title }
					heading={ data?.data?.two?.heading }
					description={ data?.data?.two?.description }
					image={data?.data?.two?.image}
				/>	
	</div>
	</div>
  )
}
