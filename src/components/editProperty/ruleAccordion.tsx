import React from "react";
import { FieldErrors, UseFormSetValue, UseFormRegister } from "react-hook-form";
import { DescriptionFormType } from "./descriptionForm";
import { ErrorMessage } from "@hookform/error-message";

export default function RuleAccordionItem({
	rule,
	errors,
	setValue,
	register,
}: {
	rule: { ruleName: string; rulesDescription: string; ruleId: string };
	errors: FieldErrors<DescriptionFormType>;
	setValue: UseFormSetValue<DescriptionFormType>;
	register: UseFormRegister<DescriptionFormType>;
}) {
	const [currentState, setCurrentState] = React.useState<{
		ruleName: string;
		rulesDescription: string;
		ruleId: string;
	}>({
		ruleName: "",
		rulesDescription: "",
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
				className="focus:outline-primary-mid-grey text-left py-3 px-4 no-underline font-semibold border rounded-lg hover:bg-slate-100 mb-2"
				{...register(`accomodationRules.${ruleIndex}.ruleName`, {
					onChange(e) {
						setCurrentState({ ...currentState, ruleName: e.target.value });
						setValue(`accomodationRules.${ruleIndex}.ruleName`, e.target.value);
					},
				})}
			/>
			<textarea
				className={
					"text-xl appearance-none border rounded-lg w-full py-6 px-3 text-primary-green leading-tight placeholder:pl-4 " +
					(errors.accomodationRules?.type === "required"
						? " outline-error"
						: " focus:outline-success focus:shadow-outline")
				}
				id={rule.ruleId}
				value={currentState.rulesDescription}
				{...register(`accomodationRules.${ruleIndex}.ruleDescription`, {
					onChange(e) {
						setCurrentState({
							...currentState,
							rulesDescription: e.target.value,
						});
						setValue(
							`accomodationRules.${ruleIndex}.ruleDescription`,
							e.target.value
						);
					},
				})}
			></textarea>
			<ErrorMessage
				errors={errors}
				name="accomodationRules"
				render={({ message }) => (
					<p className="text-xs text-error absolute bottom-[-22%]">{message}</p>
				)}
			/>
		</div>
	);
}
{
	/* <div */
}
// 	key={rule.ruleName.trim()}
// 	className="max-md:rounded-2xl max-md:shadow-md"
// >
// 	<input
// 		type="text"
// 		placeholder={rule.ruleName}
// 		onChange={(e) => {
// 			let debounce;
// 			clearTimeout(debounce);
// 			console.log(e.target.value);
// 			const newState = [...rules];
// 			newState[Number(rule.ruleId[rule.ruleId.length - 1])] = {
// 				...rule,
// 				ruleName: e.target.value,
// 			};
// 			debounce = setTimeout(() => setRules(() => [...newState]), 2000);
// 		}}
// 		// disabled={!isOpen}
// 		// autoFocus={focus}
// 		onClick={handleClick}
// 		className="text-left no-underline font-semibold border rounded-lg hover:bg-slate-100 mb-2"
// 	/>
// 	<div className={cn("text-sm transition-all h-max")}>
// 		<Textarea
// 			className={
// 				" text-xl appearance-none border rounded-lg w-full py-6 px-3 text-primary-green leading-tight placeholder:pl-4 " +
// 				(errors.reason?.type === "required"
// 					? " outline-error"
// 					: " focus:outline-success focus:shadow-outline") +
// 				(isOpen
// 					? "animate-accordion-down min-h-[100px]"
// 					: "animate-accordion-up min-h-0 py-0")
// 			}
// 			id={rule.ruleName.trim()}
// 			placeholder={`Write rules for ${rule.ruleName.toLocaleLowerCase()}`}
// 			autoComplete="on"
// 			{...register("rules")}
// 		/>
// 		<ErrorMessage
// 			errors={errors}
// 			name="rules"
// 			render={({ message }) => (
// 				<p className="text-xs text-error absolute bottom-[-22%]">
// 					{message}
// 				</p>
// 			)}
// 		/>
// 	</div>
