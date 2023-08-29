import classes from './RadioSquare.module.css'
export const RadioSquare = ( { id, name, data } ) =>
{
  return (
	<div>
		<input className={classes.RadioSquare} type="radio" name={name} id={id} />
		<label className="cursor-pointer" htmlFor={id}>
			<span className="w-80 border-2 border-neutral-400 rounded-xl flex flex-row justify-between p-3">
			<span className="flex flex-col">
				<span>{data?.model?.name}</span>
				<span>{data?.model?.display}</span>	
			</span>
			<span className="flex flex-col">
				<span>From ${data?.model?.price}</span>
			</span>	
			</span>	
		</label>
	</div>
  )
}
