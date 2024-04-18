import React from "react";
import TestimonialCard, { TestimonialProps } from "./testimonialCard";

export default function Testimonials() {
	return (
		<section className="flex flex-col items-center py-8 mb-8  max-sm:px-8">
			<h1 className="text-4xl font-bold mb-4 text-center">
				Word from our customers
			</h1>
			<p className="text-primary-mid-green mb-14 text-center">
				Our users have plenty to say about their success with Squazzle!
			</p>
			<div className="flex items-center justify-center gap-4 flex-wrap">
				{testimonialData.map((testimonial) => (
					<TestimonialCard
						name={testimonial.name}
						platform={testimonial.platform}
						profileImg={testimonial.profileImg}
						quote={testimonial.quote}
						rating={testimonial.rating}
						key={testimonial.name}
					/>
				))}
			</div>
		</section>
	);
}

const testimonialData: Array<TestimonialProps> = [
	{
		name: "Julia",
		profileImg: "/Julia-pfp.png",
		platform: "twitter",
		quote:
			"Squazzle has been my go-to for finding unique accommodations wherever I travel. I love the variety of options available and the ease of booking. The platform is user-friendly, and their customer service is responsive. Overall, Squazzle offers a fantastic way to discover new places to stay!",
		rating: 4,
	},
	{
		name: "Max",
		profileImg: "/Max-pfp.png",
		platform: "twitter",
		quote:
			"Squazzle has been a game-changer for me! The platform is user-friendly, and I've always found fantastic accommodations at great prices. The customer service is top-notch too—responsive and helpful. Five stars all the way!",
		rating: 5,
	},
	{
		name: "Jane Smith",
		profileImg: "/Mike-pfp.png",
		platform: "twitter",
		quote:
			"Squazzle has been a convenient platform for finding accommodation during my travels. While the experience has generally been positive with easy booking and good communication, there have been a few instances where clarity on property details could have been better. Overall, a reliable option for affordable stays.",
		rating: 3.5,
	},
];
