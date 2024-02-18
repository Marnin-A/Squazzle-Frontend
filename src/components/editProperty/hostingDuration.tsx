import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { UseFormRegister } from "react-hook-form";
import { OverviewForm } from "./overviewForm";

export default function HostingDuration({
	fieldDate,
	setFieldDate,
	name,
	register,
	dateRef,
}: {
	fieldDate: Date | undefined;
	setFieldDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
	name: "hostingPeriodFrom" | "hostingPeriodTo
";
	register: UseFormRegister<OverviewForm>;
	dateRef: React.Ref<HTMLDivElement>;
}) {
	return (
		<div>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							"w-full pl-3 text-left font-normal",
							!fieldDate && "text-muted-foreground"
						)}
					>
						{fieldDate ? (
							new Date(fieldDate).toDateString()
						) : (
							<span>Pick a date</span>
						)}
						<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={fieldDate}
						onSelect={setFieldDate}
						disabled={
							(date) => date < new Date()
							// || date < new Date("1900-01-01")
						}
						{...register(name, {
							onBlur(event) {
								console.log(event.target.value);
							},
							onChange(event: {
								target: { value: React.SetStateAction<Date | undefined> };
							}) {
								console.log(event.target.value);

								setFieldDate(event.target.value);
							},
						})}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
