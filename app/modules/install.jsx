export default function installSteps(mod) {
	return (
		<div className={"title remix__form"}>
			<h1>
				<span>Install steps</span>
			</h1>
			<p>{mod.install}</p>
			<button className={"idButton"} type="submit" onClick={() => { window.location.href = mod.link }}>
				Download
			</button>
		</div>
	)
}