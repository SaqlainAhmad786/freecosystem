import { useAuth } from "../contexts/authContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { X } from "lucide-react";

function YourAds() {
	const { userAds, receivedInterests } = useAuth();

	const options2 = {
		type: "slide",
		perPage: 4,
		gap: "0.75rem",
		pagination: true,
		arrows: false,
		perMove: 1,
		breakpoints: {
			1200: {
				perPage: 3,
			},
			900: {
				perPage: 2,
				autoplay: true,
				arrows: true,
			},
			600: {
				perPage: 1,
				autoplay: true,
				pagination: false,
				arrows: true,
			},
		},
	};

	return (
		<>
			<Navbar />
			<main>
				<div className="customContainer my-2">
					<h1 className="text-lg font-semibold">Your Ads</h1>
				</div>
				<div className="customContainer bg-white mb-5 rounded-lg shadow-md p-6">
					<h2 className="font-semibold mb-2 text-center text-orange">Your Product Ads</h2>
					<div>
						<Splide aria-label="services slides" options={options2} className="pb-8">
							{userAds?.product?.map((product) => {
								return (
									<SplideSlide
										key={product._id}
										className="flex justify-center items-center"
									>
										<div className="bg-white border border-lightOrange rounded-lg overflow-hidden">
											<img
												src="/images/product1.jpg"
												className="w-full h-48 object-cover"
												alt=""
											/>
											<div className="px-5 my-3">
												<h4 className="text-lg font-semibold mb-1">
													{product.title}
												</h4>
												<p className="text-sm text-gray-500">
													{product.city}, {product.state} ({product.pincode})
												</p>
												<p className="text-sm text-gray-500">
													Qty: {product.quantity}
												</p>
												<p className="text-sm text-gray-500">
													Status:{" "}
													<span className="text-green-500 capitalize">
														{product.status}
													</span>
												</p>
											</div>
											<div className="grid grid-cols-2 gap-2 px-2 my-3">
												<button
													className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2"
													onClick={() =>
														document
															.getElementById(
																`interestReceivedModal${product._id}`
															)
															.showModal()
													}
												>
													Interests received
												</button>
												<dialog
													id={`interestReceivedModal${product._id}`}
													className="modal"
												>
													<div className="modal-box">
														<div className="flex justify-between items-center mb-2">
															<h3 className="font-bold text-lg">
																Interests Received:
															</h3>
															<button>
																<X
																	className="h-6 w-6"
																	onClick={() =>
																		document
																			.getElementById(
																				`interestReceivedModal${product._id}`
																			)
																			.close()
																	}
																/>
															</button>
														</div>
														{receivedInterests
															.filter(
																(interest) =>
																	interest.listing._id ===
																	product._id
															)
															.map((interest) => {
																return (
																	<div
																		key={interest._id}
																		className="border border-lightOrange rounded-lg p-2 mb-2"
																	>
																		<p>
																			Name:{" "}
																			<span className="font-semibold">
																				{
																					interest.sender
																						.email
																				}
																			</span>
																		</p>
																		<p>
																			Phone:{" "}
																			<span className="font-semibold">
																				********
																			</span>
																		</p>
																		<p>
																			Address:{" "}
																			<span className="font-semibold">
																				Varanasi, UP, India
																			</span>
																		</p>
																		<p>
																			Status:{" "}
																			<span className="font-semibold capitalize">
																				{interest.status}
																			</span>
																		</p>
																		<div className="flex justify-end gap-2 mt-2">
																			<button className="btn-ghost duration-200 py-1 px-2 rounded-lg">
																				Decline
																			</button>
																			<button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">
																				Accept
																			</button>
																		</div>
																	</div>
																);
															})}
													</div>
												</dialog>
												<Link
													to={`/editProduct/${product._id}`}
													className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
												>
													Edit
												</Link>
												<button
													onClick={() =>
														document
															.getElementById(
																`deactivateModal${product._id}`
															)
															.showModal()
													}
													className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
												>
													Deactivate
												</button>
												<dialog
													id={`deactivateModal${product._id}`}
													className="modal"
												>
													<div className="modal-box">
														<h3 className="font-bold text-lg">
															Are you sure?
														</h3>
														<p className="py-4 text-sm">
															If you deactivate your ad, it will be no
															longer visible to users.
														</p>
														<div className="modal-action">
															<form method="dialog">
																<button
																	className="btn mr-2"
																	onClick={() =>
																		document
																			.getElementById(
																				`deactivateModal${product._id}`
																			)
																			.close()
																	}
																>
																	Cancel
																</button>
																<button
																	className="btn bg-lightOrange text-white hover:bg-orange"
																	onClick={() =>
																		document
																			.getElementById(
																				`deactivateModal${product._id}`
																			)
																			.close()
																	}
																>
																	Confirm
																</button>
															</form>
														</div>
													</div>
												</dialog>
											</div>
										</div>
									</SplideSlide>
								);
							})}
						</Splide>
					</div>
					<h2 className="font-semibold mb-2 text-center text-orange">Your Service Ads</h2>
					<div>
						<Splide aria-label="services slides" options={options2} className="pb-8">
							{userAds?.service?.map((service) => {
								return (
									<SplideSlide
										key={service._id}
										className="flex justify-center items-center"
									>
										<div className="bg-white border border-lightOrange rounded-lg overflow-hidden">
											<img
												src="/images/product1.jpg"
												className="w-full h-48 object-cover"
												alt=""
											/>
											<div className="px-5 my-3">
												<h4 className="text-lg font-semibold mb-1">
													{service.title}
												</h4>
												<p className="text-sm text-gray-500">
													{service.city}, {service.state} ({service.pincode})
												</p>
												<p className="text-sm text-gray-500">
													Qty: {service.numberOfServices}
												</p>
												<p className="text-sm text-gray-500">
													Status:{" "}
													<span className="text-green-500">
														{service.status}
													</span>
												</p>
											</div>
											<div className="grid grid-cols-2 gap-2 px-2 my-3">
												<button
													className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2"
													onClick={() =>
														document
															.getElementById(
																`interestReceivedModal${service._id}`
															)
															.showModal()
													}
												>
													Interests received
												</button>
												<dialog
													id={`interestReceivedModal${service._id}`}
													className="modal"
												>
													<div className="modal-box">
														<div className="flex justify-between items-center mb-2">
															<h3 className="font-bold text-lg">
																Interests Received:
															</h3>
															<button>
																<X
																	className="h-6 w-6"
																	onClick={() =>
																		document
																			.getElementById(
																				`interestReceivedModal${service._id}`
																			)
																			.close()
																	}
																/>
															</button>
														</div>
														{receivedInterests
															.filter(
																(interest) =>
																	interest.listing._id ===
																	service._id
															)
															.map((interest) => {
																return (
																	<div
																		key={interest._id}
																		className="border border-lightOrange rounded-lg p-2 mb-2"
																	>
																		<p>
																			Name:{" "}
																			<span className="font-semibold">
																				{
																					interest.sender
																						.email
																				}
																			</span>
																		</p>
																		<p>
																			Phone:{" "}
																			<span className="font-semibold">
																				********
																			</span>
																		</p>
																		<p>
																			Address:{" "}
																			<span className="font-semibold">
																				Varanasi, UP, India
																			</span>
																		</p>
																		<p>
																			Status:{" "}
																			<span className="font-semibold capitalize">
																				{interest.status}
																			</span>
																		</p>
																		<div className="flex justify-end gap-2 mt-2">
																			<button className="btn-ghost duration-200 py-1 px-2 rounded-lg">
																				Decline
																			</button>
																			<button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">
																				Accept
																			</button>
																		</div>
																	</div>
																);
															})}
													</div>
												</dialog>
												<Link
													to={`/editService/${service._id}`}
													className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
												>
													Edit
												</Link>
												<button
													onClick={() =>
														document
															.getElementById(
																`deactivateModal${service._id}`
															)
															.showModal()
													}
													className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
												>
													Deactivate
												</button>
												<dialog
													id={`deactivateModal${service._id}`}
													className="modal"
												>
													<div className="modal-box">
														<h3 className="font-bold text-lg">
															Are you sure?
														</h3>
														<p className="py-4 text-sm">
															If you deactivate your ad, it will be no
															longer visible to users.
														</p>
														<div className="modal-action">
															<form method="dialog">
																<button
																	className="btn mr-2"
																	onClick={() =>
																		document
																			.getElementById(
																				`deactivateModal${service._id}`
																			)
																			.close()
																	}
																>
																	Cancel
																</button>
																<button
																	className="btn bg-lightOrange text-white hover:bg-orange"
																	onClick={() =>
																		document
																			.getElementById(
																				`deactivateModal${service._id}`
																			)
																			.close()
																	}
																>
																	Confirm
																</button>
															</form>
														</div>
													</div>
												</dialog>
											</div>
										</div>
									</SplideSlide>
								);
							})}
						</Splide>
					</div>
					<h2 className="font-semibold mb-2 text-center text-orange">Your Jobs Ads</h2>
					<div>
						<Splide aria-label="jobs slides" options={options2} className="pb-8">
							{userAds?.job?.map((job) => {
								return (
									<>
										<SplideSlide
											key={job._id}
											className="flex justify-center items-center"
										>
											<div className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
												<div className="px-5 py-3">
													<h4 className="text-lg font-semibold mb-1">
														{job.jobTitle}
													</h4>
													<p className="text-sm text-gray-500">
														{job.city}, {job.state} ({job.pincode})
													</p>
													<p className="text-sm text-gray-500">
														Positions: {job.numberOfServices}
													</p>
													<p className="text-md text-gray-700 font-medium mt-1">
														Dizi Global Solutions
													</p>
													<p className="text-sm text-gray-500">
														Status:{" "}
														<span className="text-green-500">Active</span>
													</p>
												</div>
												<div className="grid grid-cols-2 gap-2 px-2 my-3">
													<button
														className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2"
														onClick={() =>
															document
																.getElementById(
																	`interestReceivedModal${job._id}`
																)
																.showModal()
														}
													>
														Interests received
													</button>
													<dialog
														id={`interestReceivedModal${job._id}`}
														className="modal"
													>
														<div className="modal-box">
															<div className="flex justify-between items-center mb-2">
																<h3 className="font-bold text-lg">
																	Interests Received:
																</h3>
																<button>
																	<X
																		className="h-6 w-6"
																		onClick={() =>
																			document
																				.getElementById(
																					`interestReceivedModal${job._id}`
																				)
																				.close()
																		}
																	/>
																</button>
															</div>
															{receivedInterests
																.filter(
																	(interest) =>
																		interest.listing._id ===
																		job._id
																)
																.map((interest, index) => {
																	return (
																		<div
																			key={index}
																			className="border border-lightOrange rounded-lg p-2 mb-2"
																		>
																			<p>
																				Name:{" "}
																				<span className="font-semibold">
																					{
																						interest
																							.sender
																							.email
																					}
																				</span>
																			</p>
																			<p>
																				Phone:{" "}
																				<span className="font-semibold">
																					********
																				</span>
																			</p>
																			<p>
																				Address:{" "}
																				<span className="font-semibold">
																					Varanasi, UP,
																					India
																				</span>
																			</p>
																			<p>
																				Status:{" "}
																				<span className="font-semibold capitalize">
																					{
																						interest.status
																					}
																				</span>
																			</p>
																			<div className="flex justify-end gap-2 mt-2">
																				<button className="btn-ghost duration-200 py-1 px-2 rounded-lg">
																					Decline
																				</button>
																				<button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">
																					Accept
																				</button>
																			</div>
																		</div>
																	);
																})}
														</div>
													</dialog>
													<Link
														to={`/editJob/${job._id}`}
														className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
													>
														Edit
													</Link>
													<button
														onClick={() =>
															document
																.getElementById(
																	`deactivateModal${job._id}`
																)
																.showModal()
														}
														className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2"
													>
														Deactivate
													</button>
													<dialog
														id={`deactivateModal${job._id}`}
														className="modal"
													>
														<div className="modal-box">
															<h3 className="font-bold text-lg">
																Are you sure?
															</h3>
															<p className="py-4 text-sm">
																If you deactivate your ad, it will be no
																longer visible to users.
															</p>
															<div className="modal-action">
																<form method="dialog">
																	<button
																		className="btn mr-2"
																		onClick={() =>
																			document
																				.getElementById(
																					`deactivateModal${job._id}`
																				)
																				.close()
																		}
																	>
																		Cancel
																	</button>
																	<button
																		className="btn bg-lightOrange text-white hover:bg-orange"
																		onClick={() =>
																			document
																				.getElementById(
																					`deactivateModal${job._id}`
																				)
																				.close()
																		}
																	>
																		Confirm
																	</button>
																</form>
															</div>
														</div>
													</dialog>
												</div>
											</div>
										</SplideSlide>
									</>
								);
							})}
						</Splide>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default YourAds;
