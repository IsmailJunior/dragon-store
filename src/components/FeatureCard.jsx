import classes from './FeatureCard.module.css'

export const FeatureCard = ({title='TITLE',heading='Heading.',description='Description.',image='https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1'}) =>
{
  return (
	<a href='#' className={ classes.FeatureCard }>
		<div className='flex flex-col gap-2 z-10 absolute'>
		<p>{title}</p>
			<h1 className='text-2xl'>{heading}</h1>
		<p>{description}</p>
		</div>	
		<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${image})`}}></figure>
	</a>
  )
}
