import classes from './RadioSquare.module.css'
export const RadioSquare = ( { id, name, data, titleLabel='', typeLabel=''} ) =>
{
return (
<div>
	<input className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className="w-80 border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
	<span className="flex flex-col">
	<span>{data?.data?.name + ' ' + titleLabel}</span>
	<span>{data?.data?.type ? data?.data?.type + ' ' + typeLabel : null}</span>	
	</span>
	<span className="flex flex-col">
	<span>From ${data?.data?.price}</span>
	</span>	
	</span>	
	</label>
</div>
)
}