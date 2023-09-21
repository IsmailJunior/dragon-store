import classes from './RadioSquare.module.css'
export const RadioSquareContained = ({id,name,title,description}) => {
return (
<div>
	<input className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className="border-2  sm:w-96 md:w-112 lg:w-120 border-neutral-400 rounded-xl flex flex-row p-3">
	<span className="flex flex-col">
	<span className='text-2xl'>{title}</span>
	<span className='text-slate-600 text-sm'>{description}</span>
	</span>
	</span>	
	</label>
</div>
)
}