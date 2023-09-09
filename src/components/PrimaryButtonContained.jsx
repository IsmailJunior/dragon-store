export const PrimaryButtonContained = ({isDisabled}) => {
return (
<button disabled={isDisabled ? true : false} className=" disabled:bg-blue-300 hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">Add to Bag</button>
)
}