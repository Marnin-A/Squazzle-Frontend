import React from "react";
import { useDispatch } from "react-redux";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next13-progressbar";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import ImageCard from "./imageCard";
import useLocalStorage from "@/hooks/useLocalStorage";

type GalleryFormType = Array<string | undefined>;

export default function GalleryForm() {
	const router = useRouter();
	const alertId = React.useId();
	const dispatch = useDispatch();
	// Form validation from React Hook Form
	const { handleSubmit } = useForm<GalleryFormType>({
		criteriaMode: "all",
		reValidateMode: "onChange",
	});
	const [imgArray, setImgArray] = React.useState<
		Array<{ name: string; url: string } | undefined>
	>([{ name: "", url: "" }]);
	const { setLocalStorage, getLocalStorage } = useLocalStorage();

	const onSubmit: SubmitHandler<FieldValues> = () => {
		// Send Data to API
		const overview = getLocalStorage("accommodationOverview");
		const description = getLocalStorage("descriptionForm");
		const gallery = getLocalStorage("galleryForm");
		const allData = { ...overview, ...description, gallery: { ...gallery } };

		dispatch(
			setAlertOpen({
				alertId: alertId,
				open: true,
				severity: "success",
				title: "Success",
				message: "Accommodation added successfully",
			})
		);
		setTimeout(() => {
			router.push("/manageAccount/myListing");
		}, 500);
		console.log(allData);
	};
	function addPictureCard() {
		if (getLocalStorage("galleryForm")) {
			const images = getLocalStorage("galleryForm") as Array<
				{ name: string; url: string } | undefined
			>;
			images.concat({ name: "", url: "" });
			setLocalStorage("galleryForm", images);
			setImgArray([...images]);
		} else {
			setLocalStorage("galleryForm", [{ name: "", url: "" }]);
		}
		setImgArray(imgArray.concat({ name: "", url: "" }));
	}

	function handleBack() {
		router.back();
	}
	React.useEffect(() => {
		if (getLocalStorage("galleryForm")) {
			setImgArray(getLocalStorage("galleryForm"));
		} else {
			setImgArray([{ name: "", url: "" }]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<form
				name="galleryForm"
				className="bg-transparent w-full pt-6 p-10 flex flex-col gap-6 shadow-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Options */}
				<div className="flex items-center justify-between">
					<button
						onClick={addPictureCard}
						className="flex gap-2 items-center bg-primary-mid-green text-off-white text-sm py-5 px-6"
					>
						<PlusCircleIcon />
						Add photo
					</button>{" "}
					<div>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Select all
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Delete all
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Hide from gallery
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Delete
						</Button>
					</div>
				</div>
				{/* Gallery */}
				<div className="flex flex-wrap gap-5 mb-16 h-full">
					{imgArray.map((data) => (
						<ImageCard
							index={imgArray.indexOf(data)}
							key={data?.name}
							url={data?.url}
							imgArray={imgArray}
							setNewImg={setImgArray}
						/>
					))}
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
						formTarget="galleryForm"
					>
						<span>Save</span>
					</button>
				</div>
			</form>
		</>
	);
}
