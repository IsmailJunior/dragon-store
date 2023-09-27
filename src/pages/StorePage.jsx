import { useSelector } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import {selectStore,selectStoreStatus} from '../features/items/itemsSlice'
import { FeatureCardGroup } from '../components/FeatureCardGroup';
export const StorePage = () =>
{
	const storeStatus = useSelector(selectStoreStatus)
	const store = useSelector( selectStore );
return (
<div className='mx-5 py-10'>
		{ storeStatus === 'success' ?
			<>
			{ store?.map( ( section, i ) => (
			<FeatureCardGroup data={section.cards} headline={section.title} key={i}/>
		))}
			</> :<div className="flex justify-center items-center h-96">
		<Oval secondaryColor="black" color="white" />
	</div>
	}
</div>
)
}