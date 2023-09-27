import {FeatureCard} from './FeatureCard'
export const FeatureCardGroup = ( { headline = 'Headline Description.', data } ) =>
{
	
    const firstPhrase = ( text ) =>
    {
        return text.split( '.' ).at( 0 );
    }
    const secondPhrase = ( text ) =>
    {
        return text.split( '.' ).at( 1 )
	}
	
	const onClickHandler = (id) => {
		window.location.replace(`store/${id}`)
	}

	return (
<div className='flex flex-col gap-6 mb-20 mx-auto w-64 md:w-120 lg:w-124'>
	<h1 className='text-right text-3xl font-semibold'><span>{ firstPhrase( headline ) }</span>. <span className=' text-slate-500'>{secondPhrase(headline)}</span></h1>        
	<div className='flex flex-col mx-auto md:flex-row md:w-120 lg:w-124 gap-5'>	
		<FeatureCard
		title={ data?.firstCard?.name }
		heading={ data?.firstCard?.description }
		price={ data?.firstCard?.price }
		image={ data?.firstCard?.card }
		invert={ data?.firstCard?.invertText }	
		onClick={() => onClickHandler(data?.firstCard?.id)}			
		/>	
		<FeatureCard
		title={ data?.secondCard?.name }
		heading={ data?.secondCard?.description }
		price={ data?.secondCard?.price }
		image={ data?.secondCard?.card }
		invert={ data?.secondCard?.invertText }		
		onClick={() => onClickHandler(data?.secondCard?.id)}			
		/>	
		<FeatureCard
		title={ data?.thirdCard?.name }
		heading={ data?.thirdCard?.description }
		price={ data?.thirdCard?.price }
		image={ data?.thirdCard?.card }
		invert={ data?.thirdCard?.invertText }	
		onClick={() => onClickHandler(data?.thirdCard?.id)}		
		/>	
	</div>
</div>
)
}