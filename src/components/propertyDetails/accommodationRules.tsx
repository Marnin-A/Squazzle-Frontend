"use client";
import React from "react";

export default function AccommodationRules() {
	const [rules, setRules] = React.useState<
		Array<{ ruleName: string; ruleDescription: string }>
	>([
		{
			ruleName: "Damage to property",
			ruleDescription: `Guests will be held responsible for any loss or damage to the
						property caused by negligence either by themselves, their guests or
						any person for whom they are responsible for.`,
		},
		{
			ruleName: "Check-in",
			ruleDescription: `Check-in time is from 12:00 - 22:00`,
		},
		{
			ruleName: "Departure",
			ruleDescription: `Check-out time is from 12:00 - 13:00`,
		},
		{
			ruleName: "Pets",
			ruleDescription: `Pets are not allowed here. Special arrangements could be made upon request.`,
		},
		{
			ruleName: "Settlement of bills",
			ruleDescription: `Bills can be paid through bank transfers or cash. Checks are not allowed.`,
		},
	]);
	return (
		<div>
			<h3>Accommodation rules</h3>
			<div className="bg-off-white p-8">
				{rules.map((rule) => (
					<div
						key={rule.ruleName}
						className="py-3 px-6 flex flex-col gap-4 bg-white"
					>
						<h4 className="text-lg font-semibold">{rule.ruleName}</h4>
						<p>{rule.ruleDescription}</p>
					</div>
				))}
			</div>
		</div>
	);
}
