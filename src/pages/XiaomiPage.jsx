import { useSelector } from 'react-redux'
import { Oval } from "react-loader-spinner";
import { selectItems, selectStatus} from '../features/items/itemsSlice';
import { FeatureBlock } from '../components/FeatureBlock';
export const XiaomiPage = () =>
{
	const status = useSelector( selectStatus );
	const itemsRef = useSelector( selectItems );
	const items = itemsRef.filter( ( item ) => item.company === "Xiaomi" );
  return (
	<div>
		{status === "success" ? items.map( ( item, i ) => (
			<FeatureBlock key={ i } title={ item.name } description={item.description} link="تسوق الان" id={item.id} image={ item.banner } invert={item.invertText}/>
		)) : <div className="flex justify-center items-center h-96">
		<Oval secondaryColor="black" color="white" />
	</div>}
	</div>
  )
}
