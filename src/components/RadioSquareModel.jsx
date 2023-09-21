import classes from './RadioSquare.module.css'
export const RadioSquareModel = ( { id, name, data, titleLabel='', typeLabel='',changedData} ) =>
{
return (
<div>
	<input onClick={() => changedData(data?.data)} className={classes.RadioSquare} type="radio" name={name} id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className="w-72 sm:w-96 md:w-112 lg:w-80 border-2 border-neutral-400 rounded-xl justify-between flex flex-row p-3 lg:p-3">
	<span className="flex flex-col">
	<span className=' font-semibold'>{data?.data?.modelName + ' ' + titleLabel}</span>
	<span className=' text-slate-500 mt-2 text-sm'>{data?.data?.modelDescription ? data?.data?.modelDescription + ' ' + typeLabel : null}</span>	
	</span>
	<span className="flex flex-col">
	<span className='text-sm text-slate-500'>From ${data?.data?.modelPrice}</span>
	</span>	
	</span>	
	</label>
</div>
)
}