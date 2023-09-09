import { useSelector } from 'react-redux';
import {selectStatus,selectStore} from '../features/items/itemsSlice'
import { CategoryGroup } from '../components/CategoryGroup';
import { FeatureCardGroup } from '../components/FeatureCardGroup'
export const StorePage = () =>
{
	const status = useSelector(selectStatus)
	const store = useSelector( selectStore );
return (
<div className='container py-10'>
	<section className='flex mb-10'>
		<CategoryGroup />
	</section>
		{ store?.map( ( section, i ) => (
			<FeatureCardGroup data={section.cards} headline={section.heading} key={i}/>
		))}
</div>
)
}