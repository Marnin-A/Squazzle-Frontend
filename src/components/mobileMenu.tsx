import { useRouter } from "next13-progressbar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import LogoutBtn from "./logoutBtn";
import Link from "next/link";

export function MobileSideMenu() {
	const router = useRouter();

	return (
		<div className="w-min">
			<Sheet key="right">
				<SheetTrigger className="w-min flex justify-end" asChild>
					<button
						type="button"
						aria-label="menu"
						aria-controls="menu"
						className="w-8 flex flex-col gap-1 mlg:hidden"
					>
						<div className="bg-primary-green h-[3px] w-7"></div>
						<div className="bg-primary-green h-[3px] w-7"></div>
						<div className="bg-primary-green h-[3px] w-7"></div>
					</button>
				</SheetTrigger>
				<SheetContent className="w-screen" side="right">
					<div className="flex flex-col gap-2 py-4">
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"/manageAccount"}
						>
							Manage account
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"/onboarding"}
						>
							Accommodations
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"manageAccount/myListing/editProperty?view=overview"}
						>
							List your property
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"/about-us"}
						>
							About us
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"/#FAQ"}
						>
							FAQ
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"/manageAccount"}
						>
							Settings
						</Link>
						<Link
							className="p-2 text-left font-light text-base justify-start hover:bg-off-white hover:text-primary-green rounded-sm"
							href={"wishlist"}
						>
							Wishlist
						</Link>

						<hr className="border-slate-300" />
						<LogoutBtn />
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
