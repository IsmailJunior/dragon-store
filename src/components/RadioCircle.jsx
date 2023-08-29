import classes from './RadioCircle.module.css'
export const RadioCircle = ({id, color='pink',name}) => {
return (
<div>
	<input className={classes.RadioCircle} type="radio" name='color' id={id} />
	<label className="cursor-pointer" htmlFor={id}>
	<span className='shadow-inner shadow-gray-500 hover:border-slate-200  block p-4 rounded-full border-4' style={{backgroundColor: color,borderSpacing: 10}}></span>
	</label>
</div>
)
}