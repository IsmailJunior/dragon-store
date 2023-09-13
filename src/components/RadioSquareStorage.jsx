import classes from './RadioSquare.module.css'
export const RadioSquareStorage = ( { id, name, data, titleLabel='', typeLabel='', changedData,color,modelPrice} ) =>
{
return (
<div>
	<input disabled={color ? false : true} onClick={() => changedData(data?.data)} className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className={color ? "cursor-pointer" : "cursor-default"} htmlFor={id}>
	<span className="w-80 border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
	<span className="flex flex-col">
	{data?.data?.storage === '1024' ? <span className='font-semibold'>1TB</span> : <span className='font-semibold'>{data?.data?.storage + titleLabel}</span>}
	<span>{data?.data?.storageDescription ? data?.data?.storageDescription + ' ' + typeLabel : null}</span>	
	</span>
	<span className="flex flex-col">
	<span className=' text-sm text-slate-500'>From ${Number(data?.data?.storagePrice) > Number(modelPrice) ? data?.data?.storagePrice : modelPrice}</span>
	</span>	
	</span>	
	</label>
</div>
)
}