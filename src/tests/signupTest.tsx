import {
	ApiResponse,
	SimulatedOTPResponse,
	SimulatedResponse,
	SuccessfulSignupResponse,
} from "@/types/types";

// Simulate Post Request
export async function simulateApiResponse(): Promise<SimulatedResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: {
					status: "success",
					message: "Account created successfully",
				},
			});
		}, 2000);
	});
}

// Simulate OTP Response
export async function simulateOTPResponse(
	type: boolean
): Promise<SimulatedOTPResponse> {
	console.log("sim", type ?? true);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: {
					message: type
						? "Email verified successfully"
						: "Email verification failed",
				},
				status: "pending",
				isError: !type,
				isSuccess: type,
			});
		}, 2000);
	});
}
