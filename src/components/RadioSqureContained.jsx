import classes from './RadioSquare.module.css'
export const RadioSquareContained = ({id,name}) => {
  return (
	<div>
		<input className={classes.RadioSquare} type="radio" name={name} id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className="w-full border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
			<span className="flex flex-col">
				<span>Ttile</span>
				<span>Price</span>	
			</span>
			<span className="flex flex-col">
				<span>Title</span>
				<span>Price</span>
			</span>	
			</span>	
		</label>
	</div>
  )
}
