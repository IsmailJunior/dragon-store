import {Link} from 'react-router-dom'
import classes from './FeaturesBlock.module.css'
export const FeatureBlock = ( { title, description, link, image, invert, id } ) =>
{
return (
<Link to={`/store/${id}`} className="w-full h-96 bg-slate-200 flex justify-center items-center flex-col mb-3 relative">
<div className="text-center absolute top-10 z-10" style={{color: invert ? 'white' : 'initial'}}>
<h1 className="text-7xl font-semibold">{title}</h1>
<h2 className="text-3xl">{ description }</h2>
<p className="underline decoration-solid text-sky-600">{link}</p>
</div>
<figure className={classes.featureImage} style={{backgroundImage: `url(${image})`}}></figure>
</Link>
)
}