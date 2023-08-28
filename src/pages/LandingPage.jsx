import { FeatureBlock } from '../components/FeatureBlock'
import { FeaturesGroup } from '../components/FeaturesGroup'
import honor from '../assets/HonorX9A.jpg';
import samsung from '../assets/SamsungA14.jpg'
import apple from '../assets/iPhone14ProMax.jpg'
import xiaomi from '../assets/XiaomiRedmi12.jpg'
import airpods from '../assets/AirPods.jpg'
import mexmon from '../assets/MexmonEarBuds.jpg'
import iPad from '../assets/iPad.jpg'
import ultra from '../assets/S23Ultra.jpg'
import oppo from '../assets/OppoA57.jpg'
export const LandingPage = () =>
{
	const data = {
		firstSection: {
			firstBlock: {
				title: 'Xiaomi Redmi 12',
				description: 'New Colors.',
				link: 'Shop Now >',
				image: xiaomi
			},
			secondBlock: {
				title: ' AirPods',
				description: '3rd Generation.',
				link: 'Shop Now >',
				image: airpods
			}
		},
		secondSection: {
			firstBlock: {
				title: 'Mexmon AirPods',
				description: 'Sportage.',
				link: 'Shop Now >',
				image: mexmon
			},
			secondBlock: {
				title: ' iPad',
				description: '9th Generation.',
				link: 'Shop Now >',
				image: iPad
			}
		},
		thridSection: {
			firstBlock: {
				title: 'S23 Ultra',
				description: '200MP Camera.',
				link: 'Shop Now >',
				image: ultra,
				invert: true
			},
			secondBlock: {
				title: 'OPPO A57',
				description: 'Powerfull Chipset.',
				link: 'Shop Now >',
				image: oppo
			}
		}
	}

  return (
	<>
		<FeatureBlock title='Honor X9A' description='eXtra Vision, eXtra Power.' link='Shop Now >' image={honor}/>
		<FeatureBlock title='Galaxy A14' description='Colorfull colors.' link='Shop Now >' image={samsung}/>
		<FeatureBlock title=' iPhone 14 Pro Max' description='Stay Dynamic.' link='Shop Now >' image={apple} invert/>
		<div className='mx-3'>
		<FeaturesGroup leftDetails={{data: data.firstSection}} rightDetails={{data: data.firstSection}}/>
		<FeaturesGroup leftDetails={{data: data.secondSection}} rightDetails={{data: data.secondSection}}/>
		<FeaturesGroup leftDetails={{data: data.thridSection}} rightDetails={{data: data.thridSection}}/>
		</div>
	</>
  )
}
