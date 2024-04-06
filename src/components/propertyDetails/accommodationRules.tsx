"use client";
import React from "react";

type props = { rules: Array<string> };

export default function AccommodationRules(props: props) {
	return (
		<div className="mb-28" id="accommodationRules">
			<h3 className="text-[28px] max-md:text-xl mb-4">Accommodation rules</h3>
			<div className="flex flex-wrap gap-6 bg-off-white md:p-8 p-6">
				{props.rules.map((rule) => (
					<div
						key={rule}
						className="w-max py-3 px-6 flex flex-col gap-4 max-md:text-base bg-white"
					>
						<h4 className="text-lg font-semibold">{rule}</h4>
					</div>
				))}
			</div>
		</div>
	);
}
