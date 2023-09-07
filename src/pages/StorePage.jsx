import { useSelector } from 'react-redux';
import {selectItems,selectStatus} from '../features/items/itemsSlice'
import { CategoryGroup } from '../components/CategoryGroup';
import { FeatureCardGroup } from '../components/FeatureCardGroup'
export const StorePage = () =>
{
	const status = useSelector(selectStatus)
	const items = useSelector( selectItems );
	console.log(items)
return (
<div className='container py-10'>
	<section className='flex mb-10'>
		<CategoryGroup />
	</section>
	<section>
			{ items.map( ( item, i ) => (
				<FeatureCardGroup data={{item}} key={i}/>
			))}
	</section>
</div>
)
}