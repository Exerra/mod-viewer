export default function installSteps(mod) {
	return (
		<div className={"title remix__form"}>
			<h1>
				<span>Install steps</span>
			</h1>
			<p>{mod.install}</p>
			<button className={"idButton"} type="submit" onClick={() => { window.location.href = mod.link
				var x = document.getElementById("snackbar");

				// Add the "show" class to DIV
				x.className = "show";

				// After 3 seconds, remove the show class from DIV
				setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			}}>
				Download
			</button>
			<div id="snackbar">Check downloads folder</div>
		</div>
	)
}