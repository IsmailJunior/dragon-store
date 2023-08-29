
import { RadioSquare } from '../components/RadioSquare'
import { RadioCircle } from '../components/RadioCircle'
import {RadioSquareContained} from '../components/RadioSqureContained'
export const ProductPage = () =>
{
  return (
	<div className="mx-20 py-10">
		<div className="mb-10">
		<h1 className="text-6xl font-semibold mb-5">Title</h1>	
		<p>Very very long description</p>
		</div>
		<div className="flex gap-12">
			<div className='flex flex-col gap-10'>
			<div className="w-120 h-80 border-2 flex justify-center items-center rounded-xl">
			<img src="https://static.thenounproject.com/png/1269202-200.png" />
			</div>
			<h1 className='text-3xl font-semibold'>Headline Description</h1>	
			<div className='flex justify-center gap-5'>
			<RadioSquareContained id='nine' name='payment'/>	
			<RadioSquareContained id='ten' name='payment'/>	
			</div>	
			</div>	
				<fieldset>
					<legend>
					<h1 className="text-3xl font-semibold mb-7">Headline Description</h1>	
					</legend>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3'>
						<RadioSquare id='one' name='price'/>
						<RadioSquare id='two' name='price'/>
					</div>	
					<h1 className='text-xl mb-1'>Color:</h1>
					<div className='flex gap-5'>
						<RadioCircle id='three' color='gold' name='color'/>
						<RadioCircle id='four' color='purple' name='color'/>
						<RadioCircle id='five' color='black' name='color'/>
					</div>
					<div className='flex flex-col gap-3'>
						<h1 className='text-3xl font-semibold mb-7'>Headline Description</h1>
						<RadioSquare id='six' name='storage'/>
						<RadioSquare id='seven' name='storage'/>
						<RadioSquare id='eight' name='storage'/>
					</div>
					</div> 
				</fieldset>
		</div>
	</div>
  )
}
