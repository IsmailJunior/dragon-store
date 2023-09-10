import { FirstStageForm } from '../components/stages/FirstStageForm';
import { SecondStageForm } from '../components/stages/SecondStageForm';
import { ThirdStageForm } from '../components/stages/ThirdStageForm';
import { FourthStageForm } from '../components/stages/FourthStageForm';
import { FifthStageForm } from '../components/stages/FifthStageForm'
import { SixthStageForm } from '../components/stages/SixthStageForm'
export const NewItemPage = () =>
{
  return (
    <div className='w-120 mx-auto p-5 shadow-lg bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-3xl mb-2 font-semibold'>Make new item.</h1>
    </div>
      { localStorage.getItem( 'firstStageForm' ) === 'true' ? <FirstStageForm /> : null}
      { localStorage.getItem( 'secondStageForm' ) === 'true' ? <SecondStageForm /> : null }
      {localStorage.getItem('thirdStageForm') === 'true' ? <ThirdStageForm /> : null}
      { localStorage.getItem( 'fourthStageForm' ) === 'true' ? <FourthStageForm /> : null }
      {localStorage.getItem('fifthStageForm') === 'true' ? <FifthStageForm /> : null}
      {localStorage.getItem('sixthStageForm') === 'true' ? <SixthStageForm /> : null}
    </div>
  )
}