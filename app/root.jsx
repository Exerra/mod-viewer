import {
	Links,
	Link,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "remix";

import style from "~/styles/global.css"

export let links = () => {
	return [
		{rel: "stylesheet", href: style}
	]
}

export function meta() {
	return {title: "New Remix App"};
}

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet/>
			</Layout>
		</Document>
	);
}


function Document({children, title}) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			{title ? <title>{title}</title> : null}
			<Meta/>
			<Links/>
		</head>
		<body>
		{children}
		<ScrollRestoration/>
		<Scripts/>
		{process.env.NODE_ENV === "development" && <LiveReload/>}
		</body>
		</html>
	);
}

function Layout({children}) {
	return (
		<div className="remix-app">
			<header className="remix-app__header">
				<div className="container remix-app__header-content">
					<h2>Exerra's mods</h2>
					<nav aria-label="Main navigation" className="remix-app__header-nav">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<a href="https://www.nexusmods.com/users/69659473?tab=user+files">View on Nexus</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<div className="remix-app__main">
				<div className="container remix-app__main-content">{children}</div>
			</div>
			<footer className="remix-app__footer">
				<div className="container remix-app__footer-content">
					<p>&copy; Exerra</p>
				</div>
			</footer>
		</div>
	);
}

