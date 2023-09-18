import classes from './FeatureCard.module.css'
export const FeatureCard = ( {title='title', heading='heading', price='00,00', image, invert,onClick}) =>
{
	return (
<div onClick={onClick}  className={ classes.FeatureCard } style={{color: invert ? 'white' : 'black'}}>
<div className='flex flex-col gap-2 z-10 absolute'>
	<p>{title?.toUpperCase()}</p>
			<h1 className='text-2xl'>{heading}</h1>
	<p>From ${price}</p>
</div>
<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${image})`}}></figure>
</div>
)
}