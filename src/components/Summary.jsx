import {PrimaryButtonContained} from './PrimaryButtonContained'
export const Summary = ({title,price,image}) => {
return (
<div className="relative overflow-hidden flex justify-between bg-slate-200 rounded-xl p-8" style={{height: 450}}>
	<div className="flex flex-col gap-10">
		<p className="text-3xl font-semibold">Your new<br />
			{ title }.<br />
			<span className='text-slate-500'>Just the way you</span><br/>
			<span className='text-slate-500'>want it.</span>
		</p>
		<img className=' absolute  top-60' width={200} src={image} />
	</div>
	<div className="flex flex-col gap-10">
		<h1 className="text-xl">{title}</h1>
		<p className='font-semibold'>${price}.00</p>
		<p>One time payment</p>
	</div>
	<div className="flex flex-col gap-10">
		<h1>Delivery</h1>
		<p>Pickup</p>
		<PrimaryButtonContained />
	</div>
</div>
)
}