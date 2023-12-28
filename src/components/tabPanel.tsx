import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type BasicTabsProps = {
	content: Array<{ label: string; panel: React.JSX.Element }>;
	className?: string;
};

export default function BasicTabs({ content, className }: BasicTabsProps) {
	return (
		<Tabs defaultValue={content[0].label} className={className}>
			<TabsList className="gap-10 text-[#018388]">
				{content.map((item) => (
					<TabsTrigger key={item.label} value={item.label}>
						{item.label}
					</TabsTrigger>
				))}
			</TabsList>
			{content.map((item) => (
				<TabsContent key={item.label + "content"} value={item.label}>
					{item.panel}
				</TabsContent>
			))}
		</Tabs>
	);
}
