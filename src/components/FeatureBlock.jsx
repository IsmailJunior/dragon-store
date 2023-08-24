import classes from './FeatureBlock.module.css';
export const FeatureBlock = () => {
  return (
	<div className="w-full bg-slate-200 p-5 flex justify-center items-center flex-col mb-3 relative">
		<div className='z-10 text-center'>
		<h1 className="text-9xl font-semibold">Title</h1>	 
		<h2 className="text-4xl">Description</h2>  
		<a href="#" className="underline decoration-solid text-sky-500">Link</a>
			</div>
		<figure className={classes.figure}></figure>
	</div>
  )
}
