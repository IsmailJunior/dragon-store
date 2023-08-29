import {Link} from 'react-router-dom'
import classes from './FeatureCard.module.css'

export const FeatureCard = ({title='title',heading='heading',price='00,00',image='https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1',invert}) =>
{
	const camelCase = function ( text )
	{
		return text.split( ' ' ).reduce( ( a, b ) => a.charAt( 0 ).toUpperCase() + a.slice( 1 ) + ' ' + b.charAt( 0 ).toUpperCase() + b.slice( 1 ) );
	}
  return (
	<Link to='/store/m' className={ classes.FeatureCard } style={{color: invert ? 'black' : 'white'}}>
		<div className='flex flex-col gap-2 z-10 absolute'>
		<p>{title.toUpperCase()}</p>
			<h1 className='text-2xl'>{camelCase(heading)}.</h1>
		<p>From ${price}</p>
		</div>	
		<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${image})`}}></figure>
	</Link>
  )
}
