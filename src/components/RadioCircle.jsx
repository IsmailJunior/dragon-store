import classes from './RadioCircle.module.css'
export const RadioCircle = ( { id, color = 'pink', name, changedData,label,model} ) =>
{
	return (
<div>
	<input disabled={model ? false : true} onClick={() => changedData(name)} className={classes.RadioCircle} type="radio" name='color' id={id} />
	<label onMouseEnter={() => model ? label(name) : label('')} onMouseLeave={() => label('')}  className={model ? "cursor-pointer" : "cursor-default"} htmlFor={id}>
	<span
	className={
		model ? 'w-16 h-16 lg:w-10 lg:h-10 shadow-inner shadow-gray-500 hover:outline-gray-300 outline outline-slate-100 block p-4 rounded-full border-2'
		: 'w-16 h-16 lg:w-10 lg:h-10 shadow-inner shadow-gray-500 block p-4 rounded-full border-2'					
		} style={ { backgroundColor: color } }></span>
	</label>
</div>
)
}