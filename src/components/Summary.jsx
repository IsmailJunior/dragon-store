import {PrimaryButton} from '../components/PrimaryButton'
export const Summary = () => {
  return (
	<div className="flex justify-between bg-slate-200 rounded-xl p-8">
		<div className="flex flex-col gap-10">
			<h1 className="text-3xl font-semibold">Very Long Description</h1>
			<img src="https://static.thenounproject.com/png/1269202-200.png" />
		</div>	
		<div className="flex flex-col gap-10">
			<h1 className="text-xl">Product Title</h1>
			<p>Price</p>
			<p>Payment Method</p>
		</div>
		<div className="flex flex-col gap-10">	
			<h1>Transport Method</h1>
			<p>Delivery</p>
			<PrimaryButton />
		</div>
	</div>
  )
}
