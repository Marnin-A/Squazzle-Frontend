import React from "react";
import Image from "next/image";
import { PlusCircleIcon, X } from "lucide-react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function ImageCard({
	url,
	index,
	imgArray,
	setNewImg,
}: {
	url: string | undefined;
	index: number;
	imgArray: Array<{ name: string; url: string } | undefined>;
	setNewImg: React.Dispatch<
		React.SetStateAction<({ name: string; url: string } | undefined)[]>
	>;
}) {
	const { setLocalStorage } = useLocalStorage();

	function handleDelete() {
		const newState = imgArray;
		newState.splice(index, 1);
		console.log(index);

		setLocalStorage("galleryForm", newState);
		setNewImg([...newState]);
	}
	return (
		<div className="flex items-center justify-center w-[337px] h-[245px] overflow-hidden relative group bg-off-white">
			{url ? (
				<>
					<Image
						src={url}
						alt="Property image"
						height={337}
						width={245}
						placeholder="empty"
						priority={false}
						className="w-min h-auto z-20"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<button
								className="bg-primary-mid-grey w-10 h-10 absolute top-3 right-3 z-30 opacity-70"
								id="options"
							>
								<DotsVerticalIcon
									className="m-auto w-2/3 h-2/3"
									color="#03796E"
								/>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="absolute top-[-60px] right-2 w-max">
							<DropdownMenuItem className="ml-auto w-min">
								<X />
							</DropdownMenuItem>
							<hr className="border" />
							<DropdownMenuItem>Set as cover photo</DropdownMenuItem>
							<DropdownMenuItem>Hide from gallery</DropdownMenuItem>
							<DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</>
			) : (
				<div className="w-full h-full relative bg-off-white flex justify-center items-center">
					<input
						onChange={(e) => {
							const file: File | undefined = e.target.files?.[0];
							if (file) {
								const reader = new FileReader();
								reader.onloadend = () => {
									imgArray[index] = {
										name: file.name,
										url: reader.result as string,
									};
									setLocalStorage("galleryForm", [...imgArray]);
									setNewImg([...imgArray]);
								};
								reader.readAsDataURL(file);
							}
						}}
						required={true}
						type="file"
						className="w-full h-[197px] absolute opacity-0 z-10"
					/>
					<PlusCircleIcon color="#03796E" className="h-16 w-16 z-1" />
					<p className="absolute bottom-0 w-full h-8 text-center pt-2 pb-4 bg-primary-mid-grey z-1">
						Add Image
					</p>
				</div>
			)}
		</div>
	);
}
