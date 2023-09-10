import {Link} from 'react-router-dom'
import classes from './FeatureCardAdmin.module.css'
export const FeatureCardAdmin = ( { title='title', heading='heading', price='00,00', image='https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1', invert, id, newTab=false}) =>
{
	return (
<Link target={newTab ? '_blank' : ''} to={`/store/${id}`} className={ classes.FeatureCard } style={{color: invert ? 'black' : 'white'}}>
<div className='flex flex-col gap-2 z-10 absolute'>
	<p>{title.toUpperCase()}</p>
			<h1 className='text-2xl'>{heading}</h1>
	<p>From ${price}</p>
</div>
<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${image})`}}></figure>
</Link>
)
}