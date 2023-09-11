import {Link} from 'react-router-dom'
import classes from './FeatureCardAdmin.module.css'
export const FeatureCardAdmin = ( { title, heading, price, image, invert, id, newTab=false}) =>
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