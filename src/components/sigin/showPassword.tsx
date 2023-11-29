import Image from "next/image";
// Note: The parent component must be display relative
export default function ShowPassword({
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
				<Image src={"/closed-eye.svg"} alt="eye" width={20} height={20} />
			) : (
				<Image src={"/open-eye.svg"} alt="eye" width={20} height={20} />
			)}
		</button>
	);
}
