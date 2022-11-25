// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./Basement.css";

const Basement = ({
	setSelectedLab,
	basementL_1,
	setBasementL_1,
	basementL_2,
	setBasementL_2,
	basementL_3,
	setBasementL_3,
	basementL_4,
	setBasementL_4
}) => {
	// for updating booking
	const [isUpdate, setIsUpdate] = useState("");

	// for getting selected seat
	const [getId, setId] = useState("");

	// for displaying booked value
	const [getBooked, setBooked] = useState("");

	// for getting all documents
	const [getDocs, setDocs] = useState("");

	// fetching data from database start
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/user/allDocs?lab=ridhima-basement-lab");

				const result = await response.json();

				if (response.status === 200) {
					setDocs(result ? result : []);
				} else if (response.status === 400) {
					toast(result.error, {
						position: "top-right",
						theme: "dark",
						autoClose: 3000
					});
				}
			} catch (error) {
				toast.error(error.message, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
			}
		})();
	}, [isUpdate]);
	// fetching data from database end

	// for counting booking seat & empty seat start
	useEffect(() => {
		if (getDocs) {
			setBasementL_1(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(0, 25)
					.filter((result) => result === true)
			);

			setBasementL_2(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(25, 22)
					.filter((result) => result === true)
			);

			setBasementL_3(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(47, 21)
					.filter((result) => result === true)
			);

			setBasementL_4(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(68, 23)
					.filter((result) => result === true)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getDocs]);
	// for counting booking seat & empty seat end

	return (
		<>
			{getDocs.length > 0 && (
				<div
					className="container-fluid p-0 basement-main-container"
					data-aos="zoom-in"
					data-aos-duration="700"
				>
					<div className="row m-0 basement-container">
						<div className="col-12 p-0 basement-wrapper">
							<div id="top">
								<div id="left">
									<div id="inside-box">
										<div id="box-top">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(0, 6)}
										</div>
										<div id="box-bottom">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(6, 6)}
											<span className="visibility-none"></span>
										</div>
										<div id="count-section">
											<p>
												<div className="booked-seat-style"></div>&nbsp;=&nbsp;
												<h6>{basementL_1.length}</h6>
											</p>
											<p>
												<div className="empty-seat-style"></div>&nbsp;=&nbsp;
												<h6>{25 - basementL_1.length}</h6>
											</p>
										</div>
									</div>
									<div id="outside-box">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}

														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(12, 7)}
									</div>
								</div>

								<div id="middle">
									<p>Entry / Exit</p>
								</div>

								<div id="right">
									<div id="right-inside-box">
										<div id="right-left">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(72, 5)}
										</div>

										<div id="body-container">
											<div id="right-top">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(77, 6)}
											</div>
											<div id="right-bottom">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(83, 4)}
											</div>
										</div>
										<div id="count-section">
											<p>
												<div className="booked-seat-style"></div>&nbsp;=&nbsp;
												<h6>{basementL_4.length}</h6>
											</p>
											<p>
												<div className="empty-seat-style"></div>&nbsp;=&nbsp;
												<h6>{23 - basementL_4.length}</h6>
											</p>
										</div>
									</div>

									<div id="right-outside-box">
										<div id="right-outside-box-wrapper">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(87, 4)}
										</div>
									</div>
								</div>
							</div>
							<div id="bottom">
								<div id="bottom-top">
									<div id="up-section">
										<div id="up-left">
											<div id="section-1">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(19, 6)}
											</div>

											<div id="section-2">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(25, 3)}
											</div>
										</div>

										<div id="up-right">
											<div id="section-1">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(47, 4)}
											</div>

											<div id="section-2">
												{getDocs
													.map((value, index) => {
														return (
															<span
																key={index}
																onClick={() =>
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? setBooked(value)
																			: setId(value._id)
																		: setId(value._id)
																}
																className={
																	new Date().getTime() < value?.days_left
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  ) !== 0
																			? "active"
																			: ""
																		: ""
																}
															>
																{new Date().getTime() < value.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? Math.abs(
																				Math.floor(
																					value.days_left / (3600 * 24 * 1000)
																				) -
																					Math.floor(
																						new Date().getTime() /
																							(3600 * 24 * 1000)
																					)
																		  )
																		: ""
																	: ""}

																{/* {value.booking_seat} */}
															</span>
														);
													})
													.splice(68, 4)}
											</div>
										</div>
									</div>

									<div id="down-section">
										<div id="left">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(28, 10)}
										</div>

										<div id="right">
											{getDocs
												.map((value, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? setBooked(value)
																		: setId(value._id)
																	: setId(value._id)
															}
															className={
																new Date().getTime() < value?.days_left
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  ) !== 0
																		? "active"
																		: ""
																	: ""
															}
														>
															{new Date().getTime() < value.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? Math.abs(
																			Math.floor(
																				value.days_left / (3600 * 24 * 1000)
																			) -
																				Math.floor(
																					new Date().getTime() /
																						(3600 * 24 * 1000)
																				)
																	  )
																	: ""
																: ""}

															{/* {value.booking_seat} */}
														</span>
													);
												})
												.splice(51, 8)}
										</div>
									</div>
								</div>
								<div id="bottom-bottom">
									<div id="section-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}

														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(38, 9)}
									</div>

									<div id="section-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}

														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(59, 9)}
									</div>
								</div>
							</div>
							<div id="count-section-2">
								<p>
									<div className="booked-seat-style"></div>&nbsp;=&nbsp;
									<h6>{basementL_2.length}</h6>
								</p>
								<p>
									<div className="empty-seat-style"></div>&nbsp;=&nbsp;
									<h6>{22 - basementL_2.length}</h6>
								</p>
							</div>

							<div id="count-section-3">
								<p>
									<div className="booked-seat-style"></div>&nbsp;=&nbsp;
									<h6>{basementL_3.length}</h6>
								</p>
								<p>
									<div className="empty-seat-style"></div>&nbsp;=&nbsp;
									<h6>{21 - basementL_3.length}</h6>
								</p>
							</div>
						</div>
						<div
							className="close-btn-basement"
							onClick={() => {
								setSelectedLab("");
							}}
						>
							<i className="fa-solid fa-x"></i>
						</div>
					</div>
					{(getId || getBooked) && (
						<BookingPopUp
							getId={getId}
							setId={setId}
							frow_where={"ridhima-basement-lab"}
							setIsUpdate={setIsUpdate}
							getBooked={getBooked}
							setBooked={setBooked}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default Basement;
