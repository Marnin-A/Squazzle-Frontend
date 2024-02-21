"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next13-progressbar";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ManageSearchParams from "@/hooks/updateSearchParams";
import PhotoSharpIcon from "@mui/icons-material/PhotoSharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";

export default function SideNav() {
	const router = useRouter();
	const { getURLParam } = ManageSearchParams();
	return (
		<div className="w-[305px] mr-16 max-md:m-0 max-md:w-full">
			<div className="bg-primary-dark-green mb-5 block max-md:hidden">
				<button
					onClick={() => router.push("../myListing")}
					className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2"
				>
					<ArrowLeft color="#CCE6E7" /> Back to my listing
				</button>
			</div>
			<div className="max-md:shadow-none max-md:text-xs max-md:w-full max-md:font-semibold max-md:flex max-md:items-center max-md:justify-center max-md:gap-3">
				<Link
					href="?view=overview"
					className={
						"flex items-center gap-4 py-3 pl-3 max-md:gap-2 max-md:p-[10px] max-md:bg-off-white max-md:hover:shadow " +
						(getURLParam("view") == "overview" && "bg-primary-lightgreen")
					}
				>
					<AppsSharpIcon className="w-7 h-7" htmlColor="#03796E" />
					Overview
				</Link>
				<Link
					href="?view=description"
					className={
						"flex items-center gap-4 py-3 pl-3 max-md:gap-2 max-md:p-[10px] max-md:bg-off-white max-md:hover:shadow " +
						(getURLParam("view") == "description" && "bg-primary-lightgreen")
					}
				>
					<DescriptionSharpIcon className="w-7 h-7" htmlColor="#03796E" />
					Description
				</Link>
				<Link
					href="?view=gallery"
					className={
						"flex items-center gap-4 py-3 pl-3 max-md:gap-2 max-md:p-[10px] max-md:bg-off-white max-md:hover:shadow " +
						(getURLParam("view") == "gallery" && "bg-primary-lightgreen")
					}
				>
					<PhotoSharpIcon className="w-7 h-7" htmlColor="#03796E" />
					Gallery
				</Link>
			</div>
		</div>
	);
}
