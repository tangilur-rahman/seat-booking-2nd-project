// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GenerateReport from "../../components/GenerateReport/GenerateReport";

// internal components
import { GetContextApi } from "../../ContextApi";
import Basement from "../Basement/Basement";
import BoysLab1 from "../BoysLab1/BoysLab1";
import BoysLab2 from "../BoysLab2/BoysLab2";
import GirlsLab1 from "../GirlsLab1/GirlsLab1";
import GirlsLab2 from "../GirlsLab2/GirlsLab2";
import "./Home.css";

const Home = () => {
	// for updating generate-report
	const { updateReport } = GetContextApi();

	// for getting option
	const [getOption, setOption] = useState("seats");

	// for lab selection
	const [selectedLab, setSelectedLab] = useState("");

	// girls-lab-1 states
	const [girlsLab_1L_1, setGirlsLab_1L_1] = useState([]);
	const [girlsLab_1L_2, setGirlsLab_1L_2] = useState([]);
	const [girlsLab_1L_3, setGirlsLab_1L_3] = useState([]);
	const [girlsLab_1L_4, setGirlsLab_1L_4] = useState([]);
	const [girlsLab_1L_5, setGirlsLab_1L_5] = useState([]);
	const [girlsLab_1L_6, setGirlsLab_1L_6] = useState([]);

	// girls-lab-2 states
	const [girlsLab_2L_1, setGirlsLab_2L_1] = useState([]);
	const [girlsLab_2L_2, setGirlsLab_2L_2] = useState([]);
	const [girlsLab_2L_3, setGirlsLab_2L_3] = useState([]);
	const [girlsLab_2L_4, setGirlsLab_2L_4] = useState([]);
	const [girlsLab_2L_5, setGirlsLab_2L_5] = useState([]);

	// basement state
	const [basementL_1, setBasementL_1] = useState([]);
	const [basementL_2, setBasementL_2] = useState([]);
	const [basementL_3, setBasementL_3] = useState([]);
	const [basementL_4, setBasementL_4] = useState([]);

	// boys-lab-1 states
	const [boysLab_1L_1, setBoysLab_1L_1] = useState([]);
	const [boysLab_1L_2, setBoysLab_1L_2] = useState([]);
	const [boysLab_1L_3, setBoysLab_1L_3] = useState([]);
	const [boysLab_1L_4, setBoysLab_1L_4] = useState([]);

	// boys-lab-2 states
	const [boysLab_2L_1, setBoysLab_2L_1] = useState([]);
	const [boysLab_2L_2, setBoysLab_2L_2] = useState([]);
	const [boysLab_2L_3, setBoysLab_2L_3] = useState([]);
	const [boysLab_2L_4, setBoysLab_2L_4] = useState([]);
	const [boysLab_2L_5, setBoysLab_2L_5] = useState([]);

	// for getting those document which are updated today start
	const [generateT, setGenerateT] = useState("");
	const [generateR, setGenerateR] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/user/generate-report");

				const result = await response.json();

				if (response.status === 200) {
					setGenerateR(result ? result : []);
				} else if (response.status === 400) {
					toast(result.error, {
						position: "top-right",
						theme: "dark",
						autoClose: 3000
					});
				} else if (result.error) {
					toast.error(result.message, {
						position: "top-right",
						theme: "colored",
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
	}, [updateReport]);
	// for getting those document which are updated today end

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 home-container">
					<div className="col-12 p-0 navbar-container">
						<div
							className={getOption === "user" ? "option active" : "option"}
							onClick={() => setOption("user")}
						>
							<i className="fa-solid fa-user"></i> <h6>User</h6>
						</div>
						<div
							className={getOption === "seats" ? "option active" : "option"}
							onClick={() => setOption("seats")}
						>
							<i className="fa-solid fa-couch"></i> <h6>Seats</h6>
						</div>
						<div
							className={getOption === "logout" ? "option active" : "option"}
							onClick={() => setOption("logout")}
						>
							<i className="fa-solid fa-right-from-bracket"></i>
							<h6>Log Out</h6>
						</div>
					</div>

					<div className="col-12 p-0 body-container">
						<div className="header">
							<h3>Seats Availability</h3>
							<button
								type="button"
								className="btn btn-light hover-link"
								onClick={() => setGenerateT(!generateT)}
							>
								Generate Report
							</button>
						</div>

						<div className="section-container">
							<div className="row-1">
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-girls-lab-1")}
								>
									<div id="header">
										<h5>Ridhima Girls Lab 1</h5>
										<div id="counter">
											<span>
												Total Seat : <b>105</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{girlsLab_1L_1.length +
														girlsLab_1L_2.length +
														girlsLab_1L_3.length +
														girlsLab_1L_4.length +
														girlsLab_1L_5.length +
														girlsLab_1L_6.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{105 -
														(girlsLab_1L_1.length +
															girlsLab_1L_2.length +
															girlsLab_1L_3.length +
															girlsLab_1L_4.length +
															girlsLab_1L_5.length +
															girlsLab_1L_6.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/girls-lab-1.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-girls-lab-2")}
								>
									<div id="header">
										<h5>Ridhima Girls Lab 2</h5>
										<div id="counter">
											<span>
												Total Seat : <b>84</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{girlsLab_2L_1.length +
														girlsLab_2L_2.length +
														girlsLab_2L_3.length +
														girlsLab_2L_4.length +
														girlsLab_2L_5.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{84 -
														(girlsLab_2L_1.length +
															girlsLab_2L_2.length +
															girlsLab_2L_3.length +
															girlsLab_2L_4.length +
															girlsLab_2L_5.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/girls-lab-2.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-basement-lab")}
								>
									<div id="header">
										<h5>Ridhima Basement Lab</h5>
										<div id="counter">
											<span>
												Total Seat : <b>91</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{basementL_1.length +
														basementL_2.length +
														basementL_3.length +
														basementL_4.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{91 -
														(basementL_1.length +
															basementL_2.length +
															basementL_3.length +
															basementL_4.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/basement.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>
							</div>

							<div className="row-2">
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-boys-lab-1")}
								>
									<div id="header">
										<h5>Ridhima Boys Labs 1</h5>
										<div id="counter">
											<span>
												Total Seat : <b>88</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{boysLab_1L_1.length +
														boysLab_1L_2.length +
														boysLab_1L_3.length +
														boysLab_1L_4.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{88 -
														(boysLab_1L_1.length +
															boysLab_1L_2.length +
															boysLab_1L_3.length +
															boysLab_1L_4.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/boys-lab-1.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-boys-lab-2")}
								>
									<div id="header">
										<h5>Ridhima Boys Lab 2</h5>
										<div id="counter">
											<span>
												Total Seat : <b>117</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{boysLab_2L_1.length +
														boysLab_2L_2.length +
														boysLab_2L_3.length +
														boysLab_2L_4.length +
														boysLab_2L_5.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{117 -
														(boysLab_2L_1.length +
															boysLab_2L_2.length +
															boysLab_2L_3.length +
															boysLab_2L_4.length +
															boysLab_2L_5.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/boys-lab-2.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-theory-lab")}
								>
									<div id="header">
										<h5>Ridhima Theory Lab</h5>
									</div>

									<div id="lab-container" className="coming-soon">
										<h4>Coming Soon . . .</h4>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>

					{selectedLab === "ridhima-girls-lab-1" && (
						<GirlsLab1
							setSelectedLab={setSelectedLab}
							girlsLab_1L_1={girlsLab_1L_1}
							setGirlsLab_1L_1={setGirlsLab_1L_1}
							girlsLab_1L_2={girlsLab_1L_2}
							setGirlsLab_1L_2={setGirlsLab_1L_2}
							girlsLab_1L_3={girlsLab_1L_3}
							setGirlsLab_1L_3={setGirlsLab_1L_3}
							girlsLab_1L_4={girlsLab_1L_4}
							setGirlsLab_1L_4={setGirlsLab_1L_4}
							girlsLab_1L_5={girlsLab_1L_5}
							setGirlsLab_1L_5={setGirlsLab_1L_5}
							girlsLab_1L_6={girlsLab_1L_6}
							setGirlsLab_1L_6={setGirlsLab_1L_6}
						/>
					)}

					{selectedLab === "ridhima-girls-lab-2" && (
						<GirlsLab2
							setSelectedLab={setSelectedLab}
							girlsLab_2L_1={girlsLab_2L_1}
							setGirlsLab_2L_1={setGirlsLab_2L_1}
							girlsLab_2L_2={girlsLab_2L_2}
							setGirlsLab_2L_2={setGirlsLab_2L_2}
							girlsLab_2L_3={girlsLab_2L_3}
							setGirlsLab_2L_3={setGirlsLab_2L_3}
							girlsLab_2L_4={girlsLab_2L_4}
							setGirlsLab_2L_4={setGirlsLab_2L_4}
							girlsLab_2L_5={girlsLab_2L_5}
							setGirlsLab_2L_5={setGirlsLab_2L_5}
						/>
					)}

					{selectedLab === "ridhima-basement-lab" && (
						<Basement
							setSelectedLab={setSelectedLab}
							basementL_1={basementL_1}
							setBasementL_1={setBasementL_1}
							basementL_2={basementL_2}
							setBasementL_2={setBasementL_2}
							basementL_3={basementL_3}
							setBasementL_3={setBasementL_3}
							basementL_4={basementL_4}
							setBasementL_4={setBasementL_4}
						/>
					)}

					{selectedLab === "ridhima-boys-lab-1" && (
						<BoysLab1
							setSelectedLab={setSelectedLab}
							boysLab_1L_1={boysLab_1L_1}
							setBoysLab_1L_1={setBoysLab_1L_1}
							boysLab_1L_2={boysLab_1L_2}
							setBoysLab_1L_2={setBoysLab_1L_2}
							boysLab_1L_3={boysLab_1L_3}
							setBoysLab_1L_3={setBoysLab_1L_3}
							boysLab_1L_4={boysLab_1L_4}
							setBoysLab_1L_4={setBoysLab_1L_4}
						/>
					)}

					{selectedLab === "ridhima-boys-lab-2" && (
						<BoysLab2
							setSelectedLab={setSelectedLab}
							boysLab_2L_1={boysLab_2L_1}
							setBoysLab_2L_1={setBoysLab_2L_1}
							boysLab_2L_2={boysLab_2L_2}
							setBoysLab_2L_2={setBoysLab_2L_2}
							boysLab_2L_3={boysLab_2L_3}
							setBoysLab_2L_3={setBoysLab_2L_3}
							boysLab_2L_4={boysLab_2L_4}
							setBoysLab_2L_4={setBoysLab_2L_4}
							boysLab_2L_5={boysLab_2L_5}
							setBoysLab_2L_5={setBoysLab_2L_5}
						/>
					)}

					{generateT && (
						<GenerateReport setGenerateT={setGenerateT} generateR={generateR} />
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
