import classes from './FeatureCard.module.css'
import samsung from '../assets/S23UltraCard.jpg'

export const FeatureCard = () =>
{
  return (
	<a href='#' className={ classes.FeatureCard }>
		<div className='flex flex-col gap-2 z-10 absolute'>
		<p>	SAMSUNG S23 ULTRA</p>
		<h1 className='text-2xl'>New Start.</h1>
		<p>From 999$.</p>
		</div>	
		<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${samsung})`}}></figure>
	</a>
  )
}
