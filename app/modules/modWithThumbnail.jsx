import { Link } from "remix";

export default function modWithThumbnail(mod) {
	return (
		<div className={"section clickable"} key={mod.name} onClick={() => { window.location.href = mod.link }}>
			<img src={mod.image} alt={"Thumbnail"} style={{ width: "100%", zIndex: "-1", padding: "0", margin: "0" }} />
			<div className={"content"}>
				<h3 className={"accent"}>{mod.name}</h3>
				<p>{mod.description}</p>
			</div>
		</div>
	)
}