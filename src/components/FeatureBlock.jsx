import {Link} from 'react-router-dom'
import classes from './FeaturesBlock.module.css'

export const FeatureBlock = ({title='Title',description='Description',link='Link',image, invert}) => {
	return (
	<Link to='/store/m' className="w-full h-96 bg-slate-200 flex justify-center items-center flex-col mb-3 relative">
		<div className="text-center absolute top-10 z-10" style={{color: invert ? 'white' : 'initial'}}>
		<h1 className="text-7xl font-semibold">{title}</h1>	 
		<h2 className="text-3xl">{ description }</h2>  
		<Link to='/store/m' className="underline decoration-solid text-sky-600">{link}</Link>	
		</div>
		<figure className={classes.featureImage} style={{backgroundImage: `url(${image})`}}></figure>
		<img src="https://static.thenounproject.com/png/1269202-200.png" />
	</Link>
  )
}
