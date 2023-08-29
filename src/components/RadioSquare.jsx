import classes from './RadioSquare.module.css'
export const RadioSquare = ({id}) => {
  return (
	<div>
		<input className={classes.RadioSquare} type="radio" name="price" id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className="border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
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
