import React from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { descriptionFormSchema } from "@/utils/schemas";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	DisplayAccordionTrigger,
} from "../ui/accordion";

type DescriptionForm = {
	about: string;
	reason: string;
	rules: Array<{
		ruleName: string;
		ruleDescription: string;
	}>;
};

export default function DescriptionForm() {
	const dispatch = useDispatch();
	const alertId = React.useId();
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<DescriptionForm>({
		resolver: yupResolver(descriptionFormSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {};
	return (
		<>
			<form
				name="descriptionForm"
				className="bg-transparent w-full pt-6 p-10 flex flex-col gap-6 shadow-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* About */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2"
						htmlFor="about"
					>
						About this Accommodation
					</Label>
					<Textarea
						className={
							"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.about?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="about"
						placeholder="A brief description of the accommodation"
						autoComplete="on"
						{...register("about")}
					/>
					<ErrorMessage
						errors={errors}
						name="about"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				<hr className="my-5 border" />
				{/* Reason */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2"
						htmlFor="reason"
					>
						Reason for listing this accommodation
					</Label>
					<Textarea
						className={
							"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.reason?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="reason"
						placeholder="Why are you listing this accommodation?"
						autoComplete="on"
						{...register("reason")}
					/>
					<ErrorMessage
						errors={errors}
						name="reason"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				<hr className="my-5 border" />
				{/* Rules */}
				<div className="relative">
					<Label
						className="block text-body-text font-normal text-[28px] mb-2"
						htmlFor="rules"
					>
						Accommodation Rules
					</Label>
					<Accordion
						type="single"
						className="max-w-full flex flex-col gap-8"
						collapsible
					>
						<AccordionItem
							key={"damageToProperty"}
							value={"damageToProperty"}
							className="max-md:rounded-2xl  max-md:shadow-md"
						>
							<DisplayAccordionTrigger className="text-left no-underline font-semibold border rounded-lg hover:bg-slate-100 mb-2">
								Damage to Property
							</DisplayAccordionTrigger>
							<AccordionContent className="overflow-visible">
								<Textarea
									className={
										"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-primary-green leading-tight placeholder:pl-4 " +
										(errors.reason?.type === "required"
											? " outline-error"
											: " focus:outline-success focus:shadow-outline")
									}
									id="rule1"
									placeholder="Write rules for damage done to property"
									autoComplete="on"
									{...register("rules")}
								/>
								<ErrorMessage
									errors={errors}
									name="rules"
									render={({ message }) => (
										<p className="text-xs text-error absolute bottom-[-22%]">
											{message}
										</p>
									)}
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</form>
		</>
	);
}
