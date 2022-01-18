import {useLoaderData} from "@remix-run/react";
import modWithThumbnail from "~/modules/modWithThumbnail";

export let loader = ({params}) => {
	let falloutNV = [
		{
			name: "Clean Mojave Outpost",
			description: "Removes the cars from the Mojave Outpost.",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/CleanMojaveOutpost/thumbnail.png",
			link: "https://cdn.exerra.xyz/games/mods/fnv/exerra/CleanMojaveOutpost/CleanMojaveOutpost_1.0.zip",
			lastUpdated: "26 Jul 2019"
		},
		{
			name: "Easy Start LR",
			description: "Footlocker with Lonesome Road items",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/EasyStartLR/thumbnail.png",
			link: "https://cdn.exerra.xyz/games/mods/fnv/exerra/EasyStartLR/EasyStartLR_1.0.zip",
			lastUpdated: "25 Jul 2019"
		}
	]


    return {falloutNV}
}

export default function Index() {
	let data = useLoaderData()

	let falloutNVMods = []
	for (let mod of data.falloutNV) {
		falloutNVMods.push(modWithThumbnail(mod))
	}

	return (
		<div>
			<br />
			<h1>
				Fallout NV
			</h1>
			<div className={"remix__page"}>
				{falloutNVMods}
			</div>
			<br />
		</div>
	);
}
