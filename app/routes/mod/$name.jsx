import {useLoaderData} from "@remix-run/react";
import installSteps from "~/modules/install";

export let loader = ({ params }) => {
	let data
	let mods = [
		{
			name: "cleanMojaveOutpost",
			longName: "Clean Mojave Outpost",
			game: "Fallout: New Vegas",
			shortDescription: "Removes the cars from the Mojave Outpost.",
			description: "A simple mod that removes the cars from the Mojave Outpost, making the road much cleaner and nicer. I did this as I think the NCR would at least tidy up their outpost so it would be cleaner and caravans could move in and out without needing to navigate through all those cars.",
			install: "Use your mod manager of choice or drop in the Data folder",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/CleanMojaveOutpost/thumbnail.png",
			link: "https://cdn.exerra.xyz/games/mods/fnv/exerra/CleanMojaveOutpost/CleanMojaveOutpost_1.0.zip",
			lastUpdated: "26 Jul 2019",
			version: "1.0"
		},
		{
			name: "easyStartLR",
			longName: "Easy Start LR",
			game: "Fallout: New Vegas",
			shortDescription: "Footlocker with Lonesome Road items",
			description: "This is a mod which adds a footlocker with LR items. Nothing special.\n\nNote: The multiple dusters isn't a glitch, it is multiple designs of it. The designs are: Regular, Legion, NCR and Old World.",
			install: "Use your mod manager of choice or drop in the Data folder",
			image: "https://cdn.exerra.xyz/games/mods/fnv/exerra/EasyStartLR/thumbnail.png",
			link: "https://cdn.exerra.xyz/games/mods/fnv/exerra/EasyStartLR/EasyStartLR_1.0.zip",
			lastUpdated: "25 Jul 2019",
			version: "1.0"
		}
	]


	for (let mod of mods) {
		if (mod.name == params.name) {
			return mod
		}
	}


	return data
}

export let meta = (loader) => {
	let data = loader.data
	let metaObj = {}

	let title = data.longName
	let description = data.shortDescription

	console.log(data.image)

	metaObj = {
		title: title,
		description: description,
		"theme-color": "#EFF5FB",
		"twitter:card": "summary_large_image",
		"twitter:image": data.image,
		"twitter:creator": "@Exerra",
		"twitter:site": "@Exerra",
		"twitter:title": title,
		"twitter:description": description,
	}

	return metaObj
}

export default function mod() {
	let data = useLoaderData()

	data.description = data.description.split('\n').map((line, i) => (
		<span key={i}>
            {line}
			<br/>
        </span>
	))

	return (
		<>
			<div className="remix__page">
				<main id={"profile"}>
					<div className={"title"}>
						<h1>
							<span className={"accent"}>{data.longName}</span>
						</h1>
						<h3>{data.game}</h3>
					</div>
					<br/>
					<div className={"title"}>
						<h1>
							<span>Description</span>
						</h1>
						<p>{data.description}</p>
					</div>
				</main>
				{installSteps(data)}
			</div>
			<img className={"imageSection"} src={data.image} alt={"Thumbnail"} style={{ padding: "0", margin: "0" }} />
		</>
	)
}