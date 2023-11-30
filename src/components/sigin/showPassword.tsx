import Image from "next/image";
// Note: The parent component must be display relative
export default function ShowPasswordBtn({
	showPassword,
	onClick,
}: {
	showPassword: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="absolute right-4 top-12 cursor-pointer"
		>
			{showPassword ? (
				<Image
					src={"/closed-eye.svg"}
					alt="eye"
					placeholder="empty"
					width={20}
					height={20}
					className="h-auto w-auto"
				/>
			) : (
				<Image
					src={"/open-eye.svg"}
					alt="eye"
					placeholder="empty"
					width={20}
					height={20}
					className="h-auto w-auto"
				/>
			)}
		</button>
	);
}
