import classes from './RadioSquare.module.css'
export const RadioSquareContained = ({id,name,title,description}) => {
return (
<div>
	<input className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className="border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3 px-32">
	<span className="flex flex-col text-center">
	<span className='text-sm'>{title}</span>
	<span className='text-slate-600 text-sm'>{description}</span>
	</span>
	</span>	
	</label>
</div>
)
}