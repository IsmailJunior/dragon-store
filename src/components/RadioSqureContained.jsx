import classes from './RadioSquare.module.css'
export const RadioSquareContained = ({id,name}) => {
  return (
	<div>
		<input className={classes.RadioSquare} type="radio" name={name} id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className="border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3 px-40">
			<span className="flex flex-col text-center">
					<span>Cash</span>
					<span className=' text-slate-600'>Description</span>
			</span>
			</span>	
		</label>
	</div>
  )
}
