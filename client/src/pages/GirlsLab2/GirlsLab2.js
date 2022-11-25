// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./GirlsLab2.css";

const GirlsLab2 = ({
	setSelectedLab,
	girlsLab_2L_1,
	setGirlsLab_2L_1,
	girlsLab_2L_2,
	setGirlsLab_2L_2,
	girlsLab_2L_3,
	setGirlsLab_2L_3,
	girlsLab_2L_4,
	setGirlsLab_2L_4,
	girlsLab_2L_5,
	setGirlsLab_2L_5
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
				const response = await fetch("/user/allDocs?lab=ridhima-girls-lab-2");

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
			setGirlsLab_2L_1(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(0, 18)
					.filter((result) => result === true)
			);

			setGirlsLab_2L_2(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(18, 18)
					.filter((result) => result === true)
			);

			setGirlsLab_2L_3(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(36, 18)
					.filter((result) => result === true)
			);

			setGirlsLab_2L_4(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(54, 16)
					.filter((result) => result === true)
			);

			setGirlsLab_2L_5(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(70, 14)
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
					className="container-fluid p-0 girls-2-main-container"
					data-aos="zoom-in"
					data-aos-duration="700"
				>
					<div className="row m-0 girls-2-container">
						<div className="col-12 p-0 girls-2-wrapper">
							<div id="layout-1">
								<div id="top">
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}

													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(0, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
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
											.splice(4, 7)}
									</div>

									<div id="bottom-2">
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
											.splice(11, 7)}
									</div>
								</div>

								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{girlsLab_2L_1.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{18 - girlsLab_2L_1.length}</h6>
									</p>
								</div>
							</div>

							<div id="layout-2">
								<div id="top">
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(18, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
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
											.splice(22, 7)}
									</div>

									<div id="bottom-2">
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
											.splice(29, 7)}
									</div>
								</div>

								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{girlsLab_2L_2.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{18 - girlsLab_2L_2.length}</h6>
									</p>
								</div>
							</div>

							<div id="layout-3">
								<div id="top">
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(36, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
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
											.splice(40, 7)}
									</div>

									<div id="bottom-2">
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
											.splice(47, 7)}
									</div>
								</div>

								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{girlsLab_2L_3.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{18 - girlsLab_2L_3.length}</h6>
									</p>
								</div>
							</div>

							<div id="layout-4">
								<div id="top">
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
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
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(54, 1)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(55, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(60, 5)}
									</div>
								</div>

								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{girlsLab_2L_4.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{16 - girlsLab_2L_4.length}</h6>
									</p>
								</div>
							</div>

							<div id="layout-5">
								<div id="top">
									<span className="visibility-none"></span>
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(65, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(70, 5)}
									</div>
								</div>
							</div>

							<div id="layout-6">
								<div id="top">
									<span className="visibility-none"></span>
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(75, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
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
											.splice(80, 4)}
									</div>
								</div>
								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{girlsLab_2L_5.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{14 - girlsLab_2L_5.length}</h6>
									</p>
								</div>
							</div>
						</div>
						<div
							className="close-btn-girls-2"
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
							frow_where={"ridhima-girls-lab-2"}
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

export default GirlsLab2;
