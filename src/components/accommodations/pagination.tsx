"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({
	firstIndex,
	lastIndex,
	accommodationTotal,
}: {
	firstIndex: number;
	lastIndex: number;
	accommodationTotal: number;
}) {
	return (
		<div className="flex justify-end items-center text-primary-green my-10 gap-8">
			<span>
				<span className="font-semibold">
					{firstIndex} - {lastIndex}
				</span>{" "}
				of {accommodationTotal}+ homes
			</span>
			<button
				className={
					"border border-primary-mid-grey rounded-sm p-1 " +
					(firstIndex == 1 && "opacity-30")
				}
				disabled={firstIndex == 1}
			>
				<ArrowLeft color="#016D71" />
			</button>
			<button
				className={
					"border border-primary-mid-grey rounded-sm p-1 " +
					(lastIndex == accommodationTotal && "opacity-30")
				}
				disabled={lastIndex == accommodationTotal}
			>
				<ArrowRight color="#016D71" />
			</button>
		</div>
	);
}
