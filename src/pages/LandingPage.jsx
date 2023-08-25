import { FeatureBlock } from '../components/FeatureBlock'
import { FeaturesGroup } from '../components/FeaturesGroup'
import honor from '../assets/HonorX9A.jpg';
import samsung from '../assets/SamsungA14.jpg'
import apple from '../assets/iPhone14ProMax.jpg'
export const LandingPage = () =>
{
  return (
	<>
		<FeatureBlock title='Honor X9A' description='eXtra Vision, eXtra Power' link='Shop Now >' image={honor}/>
		<FeatureBlock title='Galaxy A14' description='Colorfull colors' link='Shop Now >' image={samsung}/>
		<FeatureBlock title=' iPhone 14 Pro Max' description='Stay Dynamic' link='Shop Now >' image={apple} invert/>
		<div className='mx-3'>
		<FeaturesGroup />
		<FeaturesGroup />
		<FeaturesGroup />
		</div>
	</>
  )
}
