"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

export function MobileSideMenu() {
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
						<Button
							className="text-left font-light justify-start text-secondary-red hover:text-secondary-red rounded-none"
							variant={"ghost"}
						>
							Logout
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
