import { Category } from './Category'
import samsungLogo from '../assets/SamsungLogo.png'
import appleLogo from '../assets/AppleLogo.png'
import xiaomiLogo from '../assets/XiaomiLogo.png'
import oppoLogo from '../assets/OppoLogo.png'
import huaweiLogo from '../assets/HuaweiLogo.png'
import itelLogo from '../assets/ItelLogo.png'
import honorLogo from '../assets/HonorLogo.png'
import infinixLogo from '../assets/InfinixLogo.png'
export const CategoryGroup = () => {
  return (
	<div className='flex justify-between items-center w-full'>
		<Category title='Samsung' image={samsungLogo} />	
		<Category title='Apple' image={appleLogo} />	
		<Category title='Xiaomi' image={xiaomiLogo} />	
		<Category title='Oppo' image={oppoLogo} />	
		<Category title='Huawei' image={huaweiLogo} />	
		<Category title='Itel' image={itelLogo} />	
		<Category title='Honor' image={honorLogo} />	
		<Category title='Infinix' image={infinixLogo} />	
	</div>
  )
}
