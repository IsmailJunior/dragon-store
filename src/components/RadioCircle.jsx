import classes from './RadioCircle.module.css'
export const RadioCircle = ({id, color='pink'}) => {
  return (
	<div>
		<input className={classes.RadioCircle} type="radio" name="price" id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className='hover:border-slate-500 w-10 h-10 block p-6 rounded-full border' style={{backgroundColor: color,borderSpacing: 10}}></span>
		</label>
	</div>
  )
}
