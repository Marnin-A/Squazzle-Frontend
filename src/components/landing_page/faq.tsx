import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
// import { Typography } from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";

export default function Faq() {
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
					<AccordionItem
						value="item-1"
						className="border-2 border-[#D7D7D766] px-8"
					>
						<AccordionTrigger className="flex flex-row-reverse items-center gap-4 text-primary-mid-green">
							Where is the cheapest place to rent a house?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="item-2"
						className="border-2 border-[#D7D7D766] w-full px-8"
					>
						<AccordionTrigger className="flex flex-row-reverse items-center gap-4 text-primary-mid-green">
							How can i list my property?
						</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							soluta at cumque delectus nobis dolores sit natus autem, quisquam
							enim nostrum dolorum, ab ullam quo distinctio quas? Odio, quia
							excepturi?
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="item-3"
						className="border-2 border-[#D7D7D766] w-full px-8"
					>
						<AccordionTrigger className="flex flex-row-reverse items-center gap-4 text-primary-mid-green">
							How can I find landlords who accept housing benefit?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				{/* <Accordion>
					<AccordionSummary
						expandIcon={<PlusIcon color="#018388" />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						style={{
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
						}}
						className="flex flex-row-reverse text-center"
					>
						<Typography className="justify-self-end">Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion> */}
			</div>
		</section>
	);
}
