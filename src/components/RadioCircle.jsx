import classes from './RadioCircle.module.css'
export const RadioCircle = ({id, color='pink',name}) => {
  return (
	<div>
		<input className={classes.RadioCircle} type="radio" name={name} id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className='shadow-inner shadow-gray-500 hover:border-slate-200 w-10 h-10 block p-3 rounded-full border-4' style={{backgroundColor: color,borderSpacing: 10}}></span>
		</label>
	</div>
  )
}
