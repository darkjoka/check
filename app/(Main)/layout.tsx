import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className='container z-40 bg-background'>
                <div className="flex h-20 items-center justify-start">

                    {/* Main nav section - TODO: separate into own component */}
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/" className="space-x-2 md:flex">
                            <span>
                                🔲
                            </span>
                            <span>Junior</span>
                        </Link>

                    </div>
                </div>
            </header>
            <main className='flex-1'>{children}</main>
        </div>
    )
}
