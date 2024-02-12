import React from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { descriptionFormSchema } from "@/utils/schemas";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { PlusCircleIcon } from "lucide-react";
import RuleAccordionItem from "./ruleAccordion";
import { useRouter } from "next13-progressbar";
import useLocalStorage from "@/hooks/useLocalStorage";
import ManageSearchParams from "@/hooks/updateSearchParams";

export type DescriptionFormType = {
	description: string;
	whyListing: string;
	accommodationRules: Array<{
		ruleName: string;
		ruleDescription: string;
	}>;
};

export default function DescriptionForm() {
	const router = useRouter();
	const [rules, setRules] = React.useState<
		Array<{ ruleName: string; rulesDescription: string; ruleId: string }>
	>([
		{
			ruleName: "Damage to property ",
			rulesDescription:
				"Guests will be held responsible for any loss or damage to the property caused by negligence either by themselves, their guests or any person for whom they are responsible for.",
			ruleId: "rule0",
		},
		{
			ruleName: "Check-in",
			rulesDescription: "Check-in time is from 12:00 - 22:00",
			ruleId: "rule1",
		},
		{
			ruleName: "Departure",
			rulesDescription: "Check-out time is from 12:00 - 13:00",
			ruleId: "rule2",
		},
		{
			ruleName: "Pets",
			rulesDescription:
				"Pets are not allowed here. Special arrangements could be made upon request.",
			ruleId: "rule3",
		},
		{
			ruleName: "Settlement of Bills",
			rulesDescription:
				"Bills can be paid through bank transfers or cash. Checks are not allowed.",
			ruleId: "rule4",
		},
	]);
	const { setLocalStorage } = useLocalStorage();
	const { memoizedUpdateURLParam } = ManageSearchParams();
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<DescriptionFormType>({
		resolver: yupResolver(descriptionFormSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
	});

	const onSubmit: SubmitHandler<FieldValues> = ({ about, reason, rules }) => {
		setLocalStorage("descriptionForm", {
			about: about,
			reason: reason,
			rules: rules,
		});
		memoizedUpdateURLParam("view", "gallery");
	};

	function addNewRule(): void {
		setRules(
			rules?.concat({
				ruleName: "",
				rulesDescription: "",
				ruleId: "rule" + rules.length, // So that rule numbers will go along with their array indexes
			})
		);
	}

	function handleBack() {
		router.back();
	}

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
						htmlFor="description"
					>
						About this Accommodation
					</Label>
					<Textarea
						className={
							"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.description?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="description"
						placeholder="A brief description of the accommodation"
						autoComplete="on"
						{...register("description")}
					/>
					<ErrorMessage
						errors={errors}
						name="description"
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
						htmlFor="whyListing"
					>
						Reason for listing this accommodation
					</Label>
					<Textarea
						className={
							"min-h-[100px] text-xl appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight placeholder:pl-4 " +
							(errors.whyListing?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="whyListing"
						placeholder="Why are you listing this accommodation?"
						autoComplete="on"
						{...register("whyListing")}
					/>
					<ErrorMessage
						errors={errors}
						name="whyListing"
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
					<div className="max-w-full flex flex-col gap-8">
						{rules.map((rule) => (
							<RuleAccordionItem
								errors={errors}
								setValue={setValue}
								rule={rule}
								key={rule.ruleId}
								register={register}
							/>
						))}
						<div className="py-3 px-6">
							<button
								type="button"
								onClick={addNewRule}
								className="bg-none border-none outline-none text-error flex items-center gap-2"
							>
								Add new rule <PlusCircleIcon color="#03796E" />
							</button>
						</div>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex items-center justify-between ">
					<button
						className="w-max hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-4 px-6 rounded-md"
						type="button"
						onClick={handleBack}
					>
						Back
					</button>
					<button
						className="w-max hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-4 px-6 rounded-xl"
						type="submit"
						formTarget="descriptionForm"
					>
						<span>Save & Continue</span>
					</button>
				</div>
			</form>
		</>
	);
}
