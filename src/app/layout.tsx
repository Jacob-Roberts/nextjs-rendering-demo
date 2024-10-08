import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Link href="/" className="mr-6">
					Home
				</Link>
				<Link href="/second" className="mr-6">
					Second
				</Link>
				<Link href="/ppr" className="mr-6">
					Tweets
				</Link>
				<Link href="/blog" className="mr-6">
					Blog
				</Link>
				{children}
			</body>
		</html>
	);
}
