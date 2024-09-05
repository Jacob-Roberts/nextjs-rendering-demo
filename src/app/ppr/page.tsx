import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
	async (id: string) => _getTweet(id),
	["tweet"],
	{ revalidate: 3600 * 24 },
);

const TweetPage = async ({ id }: { id: string }) => {
	try {
		const tweet = await getTweet(id);
		return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
	} catch (error) {
		console.error(error);
		return <TweetNotFound error={error} />;
	}
};

const Page = ({ params }: { params: { tweet: string } }) => (
	<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Suspense fallback={<TweetSkeleton />}>
				<TweetPage id={params.tweet} />
			</Suspense>
			<footer>Jake's static footer</footer>
		</main>
	</div>
);

export default Page;
