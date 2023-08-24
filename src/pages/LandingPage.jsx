import { FeatureBlock } from '../components/FeatureBlock'
import { FeaturesGroup } from '../components/FeaturesGroup'
import honorBanner from '../assets/Banner.jpg'
import tecnoBanner from '../assets/Tecno.jpg'
import realmeBanner from '../assets/Realme.jpg'

export const LandingPage = () => {
  return (
	<>
		<FeatureBlock title='Honor X9A' description='Powerfull' link='Shop Now >' image={honorBanner}/>
		<FeatureBlock title='Tecno Pova 5' description='Gaming' link='Shop Now >' image={tecnoBanner} invert />
		<FeatureBlock title='Realme C55' description='New Mood' link='Shop Now >' image={realmeBanner} invert/>
		<div className='mx-3'>
		<FeaturesGroup />
		<FeaturesGroup />
		<FeaturesGroup />
		</div>
	</>
  )
}
