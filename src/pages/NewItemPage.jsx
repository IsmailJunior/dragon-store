import {FirstStageForm} from '../components/stages/FirstStageForm'
export const NewItemPage = () =>
{
  return (
    <div className='w-120 p-5 shadow-lg bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-3xl mb-2 font-semibold'>Make new item.</h1>
    </div>
      <hr />
      <FirstStageForm />
    </div>
  )
}