"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function AboutComponent({ aboutText }: { aboutText: string }) {
	const [showMore, setShowMore] = React.useState(false);
	function toggleShowMore() {
		setShowMore(!showMore);
	}

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-[28px]">About this apartment</h3>
			<p
				className={cn(
					"leading-6 text-ellipsis box-border",
					showMore ? " h-max" : " line-clamp-5 max-h-[72px]"
				)}
			>
				{aboutText}
			</p>
			<Button
				variant={"ghost"}
				className="text-error w-min"
				onClick={toggleShowMore}
			>
				Read more
			</Button>
		</div>
	);
}
