import React from "react";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormSetValue, UseFormRegister } from "react-hook-form";
import { DescriptionFormType } from "./descriptionForm";
import { ErrorMessage } from "@hookform/error-message";

export default function RuleAccordionItem({
	rule,
	errors,
	setValue,
	register,
}: {
	rule: { ruleName: string; ruleId: string };
	errors: FieldErrors<DescriptionFormType>;
	setValue: UseFormSetValue<DescriptionFormType>;
	register: UseFormRegister<DescriptionFormType>;
}) {
	const [currentState, setCurrentState] = React.useState<{
		ruleName: string;
		ruleId: string;
	}>({
		ruleName: "",
		ruleId: "",
	});
	const ruleIndex = Number(rule.ruleId[rule.ruleId.length - 1]);

	React.useEffect(() => {
		// Only update state from rule when page reloads
		setCurrentState({ ...rule });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-w-full flex flex-col">
			<input
				value={currentState.ruleName}
				type="text"
				autoFocus={false}
				defaultValue={currentState.ruleName}
				className={cn(
					"focus:outline-primary-mid-grey text-left py-3 px-4 no-underline font-semibold border rounded-lg hover:bg-slate-100 mb-2",
					errors.accomodationRules && currentState.ruleName.trim() === ""
						? " outline-error"
						: ""
				)}
				{...register(`accomodationRules.${ruleIndex}`, {
					onChange(e) {
						setCurrentState({ ...currentState, ruleName: e.target.value });
						setValue(`accomodationRules.${ruleIndex}`, e.target.value);
					},
				})}
			/>
			<ErrorMessage
				errors={errors}
				key={ruleIndex}
				name="accomodationRules"
				render={({ message }) => (
					<p className="text-xs text-error absolute bottom-[-22%] z-50">
						{message}
					</p>
				)}
			/>
		</div>
	);
}
