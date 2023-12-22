import React from "react";
import TestimonialCard, { TestimonialProps } from "./testimonialCard";

export default function Testimonials() {
	return (
		<section className="flex flex-col items-center py-8">
			<h1 className="text-4xl font-bold mb-4">Word from our customers</h1>
			<p className="text-primary-mid-green mb-14">
				Our users have plenty to say about their success with Squazzle!
			</p>
			<div className="flex items-center justify-center gap-4">
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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		rating: 4,
	},
	{
		name: "Max",
		profileImg: "/Max-pfp.png",
		platform: "twitter",
		quote:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		rating: 5,
	},
	{
		name: "Jane Smith",
		profileImg: "/Mike-pfp.png",
		platform: "twitter",
		quote:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu .",
		rating: 3.5,
	},
];
