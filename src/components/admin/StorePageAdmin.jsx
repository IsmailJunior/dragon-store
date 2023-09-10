import { useSelector } from 'react-redux';
import {selectStatus,selectStore} from '../../features/items/itemsSlice'
import { CategoryGroupAdmin } from './CategoryGroupAdmin';
import { FeatureCardGroupAdmin } from './FeatureCardGroupAdmin'
export const StorePageAdmin = () =>
{
	const status = useSelector(selectStatus)
	const store = useSelector( selectStore );
return (
<div className='mx-12 py-10'>
	<section className='flex mb-10'>
		<CategoryGroupAdmin />
	</section>
		{ store?.map( ( section, i ) => (
			<FeatureCardGroupAdmin data={section.cards} headline={section.heading} key={i}/>
		))}
</div>
)
}