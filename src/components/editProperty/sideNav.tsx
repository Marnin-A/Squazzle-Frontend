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
		<div className="w-[305px]">
			<div className="bg-primary-dark-green mb-5">
				<button
					onClick={() => router.push("../myListing")}
					className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2"
				>
					<ArrowLeft color="#CCE6E7" /> Back to my listing
				</button>
			</div>
			<div className="p-3 shadow-md">
				<Link
					href="?view=overview"
					className={
						"flex items-center gap-4 py-3 pl-3 " +
						(getURLParam("view") == "overview" && "bg-primary-lightgreen")
					}
				>
					<AppsSharpIcon className="w-7 h-7" htmlColor="#03796E" />
					Personal Details
				</Link>
				<Link
					href="?view=description"
					className={
						"flex items-center gap-4 py-3 pl-3 " +
						(getURLParam("view") == "description" && "bg-primary-lightgreen")
					}
				>
					<DescriptionSharpIcon className="w-7 h-7" htmlColor="#03796E" />
					Description
				</Link>
				<Link
					href="?view=gallery"
					className={
						"flex items-center gap-4 py-3 pl-3 " +
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
