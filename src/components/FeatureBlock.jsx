import classes from './FeaturesBlock.module.css'

export const FeatureBlock = () => {
  return (
	<div className="w-full h-96 bg-slate-200 flex justify-center items-center flex-col mb-3 relative">
		<div className="text-center absolute top-10 z-10">
		<h1 className="text-7xl font-semibold">Title</h1>	 
		<h2 className="text-3xl">Description</h2>  
		<a href="#" className="underline decoration-solid text-sky-500">Link</a>	
		</div>
		<figure className={classes.featureImage} style={{backgroundImage: `url('https://www.apple.com/v/home/bd/images/heroes/macbook-air-15/hero_macbook_air_15_midnight__ct0pgwizvree_large_2x.jpg')`}}></figure>
		<img src="https://static.thenounproject.com/png/1269202-200.png"/>
	</div>
  )
}
