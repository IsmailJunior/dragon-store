import classes from './RadioSquare.module.css'
export const RadioSquareStorage = ( { id, name, data, titleLabel='', typeLabel=''} ) =>
{
return (
<div>
	<input className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className="w-80 border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
	<span className="flex flex-col">
	<span className='font-semibold'>{data?.data?.storage + titleLabel}</span>
	<span>{data?.data?.storageDescription ? data?.data?.storageDescription + ' ' + typeLabel : null}</span>	
	</span>
	<span className="flex flex-col">
	<span className=' text-sm text-slate-500'>From ${data?.data?.storagePrice}</span>
	</span>	
	</span>	
	</label>
</div>
)
}