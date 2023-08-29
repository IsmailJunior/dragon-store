
import { RadioSquare } from '../components/RadioSquare'
import {RadioCircle} from '../components/RadioCircle'
export const ProductPage = () =>
{
  return (
	<div className="mx-20 py-10">
		<div className="mb-10">
		<h1 className="text-6xl font-semibold mb-5">Title</h1>	
		<p>Very very long description</p>
		</div>
		<div className="flex gap-20">
		<div className="w-120 h-80 border-2 flex justify-center items-center rounded-xl">
			<img src="https://static.thenounproject.com/png/1269202-200.png" />
			</div>
				<fieldset>
					<legend>
					<h1 className="text-3xl font-semibold mb-7">Headline Description</h1>	
					</legend>
					<div className='flex flex-col gap-5'>
						<RadioSquare id='one'/>
						<RadioSquare id='two' />
						<RadioCircle id='three' />
					</div>
				</fieldset>
		</div>
	</div>
  )
}
