import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

type FAQprops = {
	data: Array<{ title: string; content: string }>;
};

export default function Faq(props: FAQprops) {
	return (
		<section className="border-t border-t-slate-200 pt-24 flex flex-col items-center">
			<h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
			<p className="text-primary-mid-green mb-14">
				If you have further questions , please contact us.
			</p>
			<div className="w-[798px]">
				<Accordion
					type="single"
					className="max-w-full flex flex-col gap-8"
					collapsible
				>
					{props.data.map((item) => (
						<AccordionItem
							key={item.title}
							value={item.title}
							className="border-2 border-[#D7D7D766] px-8"
						>
							<AccordionTrigger className="flex flex-row-reverse items-center gap-4 text-primary-mid-green">
								{item.title}
							</AccordionTrigger>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
