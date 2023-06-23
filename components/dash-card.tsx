interface DashcardProps {
	overallCompleted: number
	overall: number
	title: string
}

export function Dashcard({ overallCompleted, overall, title }: DashcardProps) {
	return (
		<div className="h-48 w-full flex-1 rounded border border-border">
			<p className="text-xl font-semibold text-muted-foreground">{title}</p>
			<div className="flex justify-center">
				<div>
					<p className="font-heading text-5xl">
						{Math.round((overallCompleted / overall) * 100)}{" "}
						<span className="text-2xl text-muted-foreground">%</span>
					</p>
					<p className="flex items-center text-sm font-semibold text-muted-foreground">
						Goal Completion
					</p>
				</div>
			</div>
			<div className="container flex justify-between">
				<div>
					<p className="font-heading text-4xl">
						24 <span className="text-xl text-muted-foreground">%</span>
					</p>
					<p className="text-xs font-semibold text-muted-foreground">
						Problems Solved
					</p>
				</div>
				<div>
					<div>
						<p className="font-heading text-4xl">
							24 <span className="text-xl text-muted-foreground">/115</span>
						</p>
						<p className="text-xs font-semibold text-muted-foreground"></p>
					</div>
				</div>
			</div>
		</div>
	)
}
