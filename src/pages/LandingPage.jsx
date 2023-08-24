import { FeatureBlock } from '../components/FeatureBlock'
import { FeaturesGroup } from '../components/FeaturesGroup'
import honorBanner from '../assets/Banner.jpg'
import tecnoBanner from '../assets/Tecno.jpg'

export const LandingPage = () => {
  return (
	<>
		<FeatureBlock title='Honor X9A' description='Powerfull' link='Shop Now >' image={honorBanner}/>
		<FeatureBlock title='Tecno Pova 5' description='Gaming' link='Shop Now >' image={tecnoBanner} invert />
		<FeatureBlock />
		<div className='mx-3'>
		<FeaturesGroup />
		<FeaturesGroup />
		<FeaturesGroup />
		</div>
	</>
  )
}
