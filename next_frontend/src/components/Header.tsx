import "../styles/globals.css";

export const Header = () => {
    const header_title: string = "FullStack Todo --feat.Laravel10×Nextjs14"

    return(
        <header className="bg-indigo-300 px-16 py-8">
			<h1 className="font-black italic font-mono antialiased text-2xl">{ header_title }</h1>
		</header>
    )
}