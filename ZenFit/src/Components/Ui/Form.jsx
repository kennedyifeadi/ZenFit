import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		affair: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted:", formData);
		// Add your API logic here
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-xl">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label className="block mb-2 font-semibold">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Your name"
						value={formData.name}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
				<div>
					<label className="block mb-2 font-semibold">E-mail</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
				<div>
					<label className="block mb-2 font-semibold">Phone</label>
					<input
						type="text"
						name="phone"
						placeholder="Phone number"
						value={formData.phone}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
				<div>
					<label className="block mb-2 font-semibold">Affair</label>
					<input
						type="text"
						name="affair"
						placeholder="Subject of the message"
						value={formData.affair}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
			</div>

			<div className="mt-6">
				<label className="block mb-2 font-semibold">Message</label>
				<textarea
					name="message"
					placeholder="Write your message..."
					value={formData.message}
					onChange={handleChange}
					rows={5}
					className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
			</div>

			<div className="mt-6">
				<button
					type="submit"
					className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-600 transition-all"
				>
					Send message
				</button>
			</div>
		</form>
	);
}
