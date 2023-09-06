import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { doc, getDoc } from "firebase/firestore";
import { Oval } from "react-loader-spinner";
import { store } from "../config/firebase";
import { RadioSquare } from "../components/RadioSquare";
import { RadioCircle } from "../components/RadioCircle";
import { RadioSquareContained } from "../components/RadioSqureContained";
import { Summary } from "../components/Summary";
export const ProductPage = () => {
const [product, setProduct] = useState({});
const docRef = doc(store, "products", "xnOqBGyStjDzmenn7bmR");
useEffect(() => {
(async () => {
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
setProduct(docSnap.data());
}
})();
}, []);
return (
<div className="mx-20 py-10">
	{product.name ? (
	<>
	<div className="mb-10">
		<h1 className="text-6xl font-semibold mb-5">{product.name}</h1>
		<p>{product.description}</p>
	</div>
	<div className="flex gap-12">
		<div className="flex flex-col gap-10">
			<div className="overflow-hidden w-120 h-80 border-2 flex justify-center items-center rounded-xl">
				<img src={product.images[0].block} />
			</div>
			<h1 className="text-2xl font-semibold">
				Payment options. Select the one that works for you.
			</h1>
			<div className="flex justify-center gap-5">
			
			</div>
			<Summary
				title={product?.name}
				image={product?.images[0].block}
				price={product?.price}
				/>
		</div>
		<fieldset>
			<legend>
				<h1 className="text-2xl font-semibold mb-7">
					Model. Which is best for you?
				</h1>
			</legend>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-3">
					{product?.models?.map((model, i) => (
					<RadioSquare
						typeLabel="display"
						key={i}
						data={{ data: model }}
						id={uuid()}
						name="model"
						/>
					))}
				</div>
				<h1 className="text-xl mb-1">Color:</h1>
				<div className="w-56 flex flex-wrap gap-5">
					{product?.colors?.map((color, i) => (
					<RadioCircle color={color.hex} key={i} id={uuid()} />
					))}
				</div>
				<div className="flex flex-col gap-3">
					<h1 className="text-2xl font-semibold mb-7">
						Headline Description
					</h1>
					<RadioSquare
						titleLabel="GB"
						data={{ data: product.storages[0] }}
						id={uuid()}
						name="storage"
						/>
				</div>
			</div>
		</fieldset>
	</div>
	</>
	) : (
	<div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>
	)}
</div>
);
};