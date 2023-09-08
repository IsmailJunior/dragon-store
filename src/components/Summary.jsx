import {PrimaryButtonContained} from './PrimaryButtonContained'
export const Summary = ({title,price,image,storage,color,model}) => {
return (
<div className="w-120 relative overflow-hidden flex justify-around bg-slate-200 rounded-xl p-8" style={{height: 450}}>
	<div className="flex flex-col">
		<p className="text-3xl font-semibold">Your new<br />
			{ title }.<br />
			<span className='text-slate-500'>Just the way you</span><br/>
			<span className='text-slate-500'>want it.</span>
		</p>
		<img className=' absolute  top-60' width={200} src={image} />
	</div>
	
	<div className="w-52 flex flex-col gap-7">
		<h1 className="text-xl font-semibold">{model?.modelName ? model?.modelName : 'Choose your model.'}</h1>
		<p className='font-semibold'>${price}</p>
		<p className=' font-semibold'>One time payment</p>
	</div>
	<div className="w-52 flex flex-col gap-7">
			<h1 className='font-semibold'>Storage: { storage }{storage ? 'GB' : null}</h1>
		<p className=' font-semibold'>Color: {color}</p>
		<PrimaryButtonContained isDisabled={storage ? false : true}/>
	</div>
</div>
)
}