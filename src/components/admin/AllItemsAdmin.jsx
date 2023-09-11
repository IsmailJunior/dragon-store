import { useSelector } from 'react-redux'
import { Oval } from "react-loader-spinner";
import { selectItems,selectStatus} from '../../features/items/itemsSlice'

export const AllItemsAdmin = () =>
{
	const items = useSelector( selectItems );
	const status = useSelector(selectStatus)
  return (
	<div className='w-120  mx-auto p-5 shadow-lg bg-white'>
	<h1 className='text-3xl font-semibold mb-7'>All Items</h1>	
	<hr />	
		{status === 'success' ? <table className='w-full flex my-6 flex-col gap-6'>
			{ items?.map( ( item, i ) => (
		<tr className='cursor-pointer flex h-16 overflow-hidden shadow justify-between items-center border rounded-lg text-center' key={i}>
		<div className='flex items-center gap-10'>
		<td>
		<img width={100} src={item.previews[0]} alt={item.name} />			
		</td>	
		<td className='text-md font-semibold'>{ item.name }</td>					
		</div>
		<div className='flex '>
		<td className='flex gap-5'>
		{ item.storages.map( ( storage, i ) => (
			<span className='border rounded-lg p-1 text-md font-semibold' key={i}>{storage.storage}GB</span>	
		))}				
		</td>		
		<td className='mx-5 text-md font-semibold'>${ item.price }</td>					
		</div>			
		</tr>
		) ) }
		</table> : <div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>}
	</div>
  )
}
