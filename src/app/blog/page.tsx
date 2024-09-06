import Link from "next/link";

export const revalidate = 3600; // invalidate every hour

export default async function Page() {
	const data = await fetch("https://api.vercel.app/blog");
	const posts = await data.json();
	return (
		<main>
			<h1>Blog Posts</h1>
			<ul>
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{posts.map((post: any) => (
					<li key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
