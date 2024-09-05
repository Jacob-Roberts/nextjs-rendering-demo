import { headers } from "next/headers";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet } from "react-tweet/api";

export const experimental_ppr = true;

const TweetPage = async ({ id }: { id: string }) => {
	const h = headers();
	const backupId = h.get("test");
	try {
		const tweet = await getTweet(id ?? backupId);
		return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
	} catch (error) {
		console.error(error);
		return <TweetNotFound error={error} />;
	}
};

const Page = () => (
	<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Suspense fallback={<TweetSkeleton />}>
				<TweetPage id="1801907412175044774" />
			</Suspense>
			<footer>Jake's static footer</footer>
		</main>
	</div>
);

export default Page;
