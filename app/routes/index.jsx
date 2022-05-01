import {useLoaderData} from "@remix-run/react";
import modWithThumbnail from "~/modules/modWithThumbnail";

export let loader = ({params}) => {
	let falloutNV = [
		{
			name: "Clean Mojave Outpost",
			description: "Removes the cars from the Mojave Outpost.",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/CleanMojaveOutpost/thumbnail.png",
			link: "/mod/cleanMojaveOutpost",
			lastUpdated: "26 Jul 2019"
		},
		{
			name: "Easy Start LR",
			description: "Footlocker with Lonesome Road items",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/EasyStartLR/thumbnail.png",
			link: "/mod/easyStartLR",
			lastUpdated: "25 Jul 2019"
		}
	]

	let skyrimSE = []
	let morrowind = [
		{
			name: "Ring of Godly Eyes",
			description: "See through the eyes of the Khajiiti people",
			image: "https://cdn.exerra.xyz/games/mods/morrowind/exerra/ringOfGodlyEyes/thumbnail.png",
			link: "/mod/ringOfGodlyEyes",
			lastUpdated: "24 Jan 2022"
		},
		{
			name: "Skip census office",
			description: "Lets you skip that darn office",
			image: "https://cdn.exerra.xyz/games/mods/morrowind/exerra/skipCensusOffice/thumbnail.png",
			link: "/mod/skipCensusOffice",
			lastUpdated: "1 May 2022"
		}
	]


    return {falloutNV, skyrimSE, morrowind}
}

export default function Index() {
	let data = useLoaderData()

	let falloutNVMods = []
	let morrowindMods = []
	for (let mod of data.falloutNV) {
		falloutNVMods.push(modWithThumbnail(mod))
	}

	for (let mod of data.morrowind) {
		morrowindMods.push(modWithThumbnail(mod))
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
			<h1>
				Morrowind
			</h1>
			<div className={"remix__page"}>
				{morrowindMods}
			</div>
			<br />
		</div>
	);
}
