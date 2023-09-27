import classes from './FeatureCard.module.css'
export const FeatureCard = ( {title='title', heading='heading', price='00,00', image, invert,onClick}) =>
{
	return (
<div onClick={onClick} className='relative overflow-hidden w-64 h-82 sm:w-80 md:w-96 rounded-2xl px-4 py-5 shadow-lg bg-slate-300 sm:transition-transform ease-in-out duration-700 cursor-pointer hover:scale-105' style={{color: invert ? 'white' : 'black'}}>
<div className='flex flex-col gap-1 z-10 absolute'>
	<p>{title?.toUpperCase()}</p>
	<h1 className='text-2xl'>{heading}</h1>
	<p>ابتدائاً من {price + ',000'} د.ع</p>
</div>
<figure className={classes.FeatureCardFigure} style={{backgroundImage: `url(${image})`}}></figure>
</div>
)
}