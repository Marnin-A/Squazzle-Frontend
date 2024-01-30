"use client";

import { useRouter } from "next13-progressbar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import LogoutBtn from "./logoutBtn";

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
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
							onClick={() => router.push("/manageAccount")}
						>
							Manage account
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							Accommodations
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							List your property
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							About us
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							FAQ
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							Settings
						</Button>
						<Button
							className="text-left font-light justify-start hover:text-primary-green rounded-none"
							variant={"ghost"}
						>
							Wishlist
						</Button>

						<hr className="border-slate-300" />
						<LogoutBtn />
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
