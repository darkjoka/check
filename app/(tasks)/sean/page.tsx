import { ProblemList } from "@/components/problem-list"

export default function Sean() {
	return (
		<section className="h-screen">
			<div className="container flex max-w-[64rem] flex-col">
				<ProblemList category="grind" />
			</div>
		</section>
	)
}
