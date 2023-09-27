export const FeatureBlock = ( { title, description, link, image, invert, id } ) =>
{
	const onClickHandler = () => {
		window.location.replace(`store/${id}`)
	}
return (
<div onClick={onClickHandler} className="cursor-pointer w-full h-96 bg-slate-200 flex justify-center items-center flex-col mb-2 relative">
<div className="text-center absolute top-16 md:top-10 z-10" style={{color: invert ? 'white' : 'initial'}}>
<h1 className="text-4xl lg:text-6xl mb-2 font-medium">{title}</h1>
<h2 className="font-light md:font-normal text-1xl md:text-3xl">{ description }</h2>
<p className=" font-extralight text-sm underline decoration-solid text-sky-600">{link}</p>
</div>
<figure className='absolute w-full h-full z-0 top-0 left-0 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${image})`}}></figure>
</div>
)
}