import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Col,
	Row,
	OverlayTrigger,
	Badge,
	Tooltip
} from "react-bootstrap";
import pic from "../images/pic.jpg";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { Link } from "react-router-dom";

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (convert)
const convertTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		convert currency
	</Tooltip>
);

//==FUNCTION FOR LIKE AND UNLIKE BUTTON
const Switch = (e)  => {
	if (e.target.style.color === "#ffa500") {
		e.target.style.color = "red";
	} else if (e.target.style.color === "red") {
		e.target.style.color = "#ffa500";
	} else {
		e.target.style.color = "red";
	}
}


export default function PremiunAds() {
	const [productsData, setProductsData] = useState([]);

	let apiUrl = "https://dev.bellefu.com/api/product/home/premium/latest";

	const loadData = () => {
		axios
			.get(apiUrl, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProductsData(res.data.premium_products);
			})
			.catch((error) => {
				console.log(error);
			});
	};

useEffect(() => {
	loadData();
}, [productsData.length])

	return (
		<div>
			<Row>
			{ productsData.map((data) => (
										<Col
											key={data.slug}
											xs={6}
											sm={6}
											md={3}
											lg={3}
											xl={3}
											className=" my-1 px-1">
											<Card className="border-0 rounded-lg">
												<Card.Img
													style={styles.image}
													variant="top"
													src={`https://dev.bellefu.com/images/products/${data.slug}/${data.images[0]}`}
												/>

												<Card.ImgOverlay style={{ marginTop: "-15px" }}>
													<Row>
														<Col xs={8} sm={8} md={8} lg={8} xl={8}>
															<Badge
																variant="danger"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "featured"
																		? "d-none"
																		: "d-block" || data.plan === "higlighted"
																		? "d-none"
																		: "d-block" || data.plan === "Ugent"
																		? "d-block"
																		: "d-none"
																}`}>
																Ugent
															</Badge>
															<Badge
																variant="warning"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "ugent"
																		? "d-none"
																		: "d-block" || data.plan === "higlighted"
																		? "d-none"
																		: "d-block" || data.plan === "Featured"
																		? "d-block"
																		: "d-none"
																}`}> Featured
															</Badge>
															<Badge
																variant="success"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "ugent"
																		? "d-none"
																		: "d-block" || data.plan === "featured"
																		? "d-none"
																		: "d-block" || data.plan === "Higlighted"
																		? "d-block"
																		: "d-none"
																}`}>
																Higlighted
															</Badge>
														</Col>
														<Col xs={4} sm={4} md={4} lg={4} xl={4}>
															<AiFillHeart
																onClick={Switch}
																style={styles.favBtn}
															/>
														</Col>
													</Row>
												</Card.ImgOverlay>

												<Card.Body style={styles.titleBody}>
													<Link
														to={{
															pathname: `/product_detail/${data.slug}`,
															state: data.slug
														}}
														style={{
															color: "inherit",
															textDecoration: "inherit"
														}}>
														<p style={styles.title}>{data.title}</p>
													</Link>

													<span className="mr-1 ml-1 " style={styles.price}>
														{data.currency_symbol}
														{data.price}
													</span>

													<OverlayTrigger
														placement="bottom"
														delay={{ show: 50, hide: 100 }}
														overlay={convertTooltip}>
														<BsArrowLeftRight
															className=" ml-1"
															style={{
																fontSize: "0.9em",
																cursor: "pointer",
																fontSize: "20px",
																color: "#ffa500"
															}}
														/>
													</OverlayTrigger>
												</Card.Body>
											</Card>
										</Col>
									))
							}
							</Row>
		</div>
	);
}

const styles = {
	image: {
		height: "150px",
		padding: "5px",
		borderRadius: "10px"
	},
	title: {
		opacity: "0.9",
		fontSize: "14px",
		width: "150px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		marginTop: "-6px"
	},
	titleBody: {
		padding: "5px",
		paddingLeft: "10px"
	},
	price: {
		fontSize: "0.8em",
		backgroundColor: "whitesmoke",
		padding: "5px",
		color: "#ffa500"
	},
	favBtn: {
		marginBottom: "-220px",
		fontSize: "30px",
		color: "#ffa500",
		cursor: "pointer",
		padding: "2px",
		borderRadius: "50px",
		backgroundColor: "white"
	}
};
