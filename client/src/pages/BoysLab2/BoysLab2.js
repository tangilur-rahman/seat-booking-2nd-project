// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./BoysLab2.css";

const BoysLab2 = ({
	setSelectedLab,
	boysLab_2L_1,
	setBoysLab_2L_1,

	boysLab_2L_2,
	setBoysLab_2L_2,

	boysLab_2L_3,
	setBoysLab_2L_3,

	boysLab_2L_4,
	setBoysLab_2L_4,

	boysLab_2L_5,
	setBoysLab_2L_5
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
				const response = await fetch("/user/allDocs?lab=ridhima-boys-lab-2");

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
			setBoysLab_2L_1(
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

			setBoysLab_2L_2(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(25, 20)
					.filter((result) => result === true)
			);

			setBoysLab_2L_3(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(45, 22)
					.filter((result) => result === true)
			);

			setBoysLab_2L_4(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(67, 22)
					.filter((result) => result === true)
			);

			setBoysLab_2L_5(
				getDocs
					.map(
						(value) =>
							new Date().getTime() < value?.days_left &&
							Math.abs(
								Math.floor(value?.days_left / (3600 * 24 * 1000)) -
									Math.floor(new Date().getTime() / (3600 * 24 * 1000))
							) !== 0
					)
					.splice(89, 28)
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
					className="container-fluid p-0 boys-2-main-container"
					data-aos="zoom-in"
					data-aos-duration="700"
				>
					<div className="row m-0 boys-2-container">
						<div className="col-12 p-0 boys-2-wrapper">
							{/* layout-1 start  */}
							<div id="layout-1">
								<div id="top">
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
										.splice(0, 3)}
								</div>

								<div id="middle">
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
											.splice(3, 11)}
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
											.splice(14, 7)}
									</div>
								</div>

								<div id="bottom">
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
										.splice(21, 4)}
								</div>
								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{boysLab_2L_1.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{25 - boysLab_2L_1.length}</h6>
									</p>
								</div>
							</div>
							{/* layout-1 end  */}

							{/* layout-2 start  */}
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
										.splice(25, 3)}
								</div>

								<div id="middle">
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
											.splice(28, 7)}
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
											.splice(35, 7)}
									</div>
								</div>

								<div id="bottom">
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
										.splice(42, 3)}
								</div>
								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{boysLab_2L_2.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{20 - boysLab_2L_2.length}</h6>
									</p>
								</div>
							</div>
							{/* layout-2 end  */}

							{/* layout-3 start  */}
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
										.splice(45, 4)}
								</div>

								<div id="middle">
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
											.splice(49, 7)}
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
											.splice(56, 7)}
									</div>
								</div>

								<div id="bottom">
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
										.splice(63, 4)}
								</div>

								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{boysLab_2L_3.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{22 - boysLab_2L_3.length}</h6>
									</p>
								</div>
							</div>
							{/* layout-3 end  */}

							{/* layout-4 start  */}
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
										.splice(67, 4)}
								</div>

								<div id="middle">
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
											.splice(71, 7)}
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
											.splice(78, 7)}
									</div>
								</div>

								<div id="bottom">
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
										.splice(85, 4)}
								</div>
								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{boysLab_2L_4.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{22 - boysLab_2L_4.length}</h6>
									</p>
								</div>
							</div>
							{/* layout-4 end  */}

							{/* layout-5 start  */}
							<div id="layout-5">
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
										.splice(89, 7)}
								</div>

								<div id="middle">
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
											.splice(96, 7)}
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
											.splice(103, 7)}
									</div>
								</div>

								<div id="bottom">
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
										.splice(110, 7)}
								</div>
								<div id="count-section">
									<p>
										<div className="booked-seat-style"></div>&nbsp;=&nbsp;
										<h6>{boysLab_2L_5.length}</h6>
									</p>
									<p>
										<div className="empty-seat-style"></div>&nbsp;=&nbsp;
										<h6>{28 - boysLab_2L_5.length}</h6>
									</p>
								</div>
							</div>
							{/* layout-5 end  */}
						</div>
						<div
							className="close-btn-boys-2"
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
							frow_where={"ridhima-boys-lab-2"}
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

export default BoysLab2;
