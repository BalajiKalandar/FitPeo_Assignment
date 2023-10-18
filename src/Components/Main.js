import React from "react";
import item1 from "../Images/dollar.jpg";
// import { BarChart1 } from "../Components/BarChart";
import BarChart1 from "./BarChart";
import pro from "../Images/progress.JPG"
import cad1 from "../Images/abstract_3D.jpg";
import cad2 from "../Images/illustration1.jpg";
import hellow from "../Images/hellow.JPG"

export default function Main() {
  return (
    <>
      <div className="Nav">
        <div className="head">
          <h2>Hello Shahrukh <span><img src={hellow} alt="" width={20} />,</span></h2>
        </div>
        <div className="SearchInput">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Sales">
        <div className="item ">
          <div className="Earning item1">
            <div className="center-icon">
              <i className="fa-solid fa-hand-holding-dollar fa-2x"></i>
            </div>
          </div>
          <div className="rightToImg">
            <p>Earning</p>
            <h2>$198k</h2>
            <h6>
              <span>37.8% </span> this month
            </h6>
          </div>
        </div>
        <div className=" item">
          <div className="Earning item2">
            <div className="center-icon">
              <i class="fa-solid fa-table-list fa-2x"></i>
            </div>
          </div>
          <div className="rightToImg">
            <p>Orders</p>
            <h2>$2.4kk</h2>
            <h6>
              <span>2.7% </span> this month
            </h6>
          </div>
        </div>
        <div className="item ">
          <div className="Earning item3">
            <div className="center-icon">
              <i class="fa-solid fa-credit-card fa-2x"></i>
            </div>
          </div>
          <div className="rightToImg">
            <p>Balance</p>
            <h2>$198k</h2>
            <h6>
              <span>37.8% </span> this month
            </h6>
          </div>
        </div>
        <div className="item ">
          <div className="Earning item4">
            <div className="center-icon">
              <i class="fa-solid fa-lock fa-2x"></i>
            </div>
          </div>
          <div className="rightToImg">
            <p>Total Sales</p>
            <h2>$89k</h2>
            <h6>
              <span>11% </span> this month
            </h6>
          </div>
        </div>
      </div>
      <div className="Charts">
        <div className="OverView">
          <div className="over">
            <div>
              <h2>Overview</h2>
              <p>monthly Earning</p>
            </div>
            <div className="over1">
              Quarterly
              <span></span>
            </div>
          </div>
          <BarChart1 />
        </div>
        <div className="Customers">
          <img src={pro} alt="" />
        </div>
      </div>
      <div className="ProductSell">
        <div className="Sellbar">
          <div>
            <h3>Product Sell</h3>
          </div>
          <div className="ProduceSerach">
            <div className="rightProductSide">
              <div className="InputSearch">
                <i class="fa-solid fa-magnifying-glass fa-sm"></i>
                <input type="text" placeholder="Search" />
              </div>
              <div className="timeSpan">
                Last 30 days
                {/* <span>Last 30 days</span> */}
              </div>
            </div>
          </div>
        </div>

        <table class="custom-table">
          <thead>
            <tr>
              <th class="first-column col">Product Name</th>
              <th className="col">stock</th>
              <th className="col">Price</th>
              <th className="col">Total Sales </th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td class="first-column">
                <div className="firstCol">
                  <div className="imgK">
                    <img src={cad1} width={50} alt="" />
                  </div>
                  <div>
                    <h5>Abstract 3D</h5>
                    <p>Lorem ipsum dolor sit amet, consecutivtur adipising</p>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>
                <h5>$45.99</h5>
              </td>
              <td>20</td>
            </tr>

            <tr className="row">
              <td class="first-column">
                <div className="firstCol">
                  <div>
                  <img src={cad2} width={50} alt="" />
                  </div>
                  <div>
                    <h5>Sarphens Illustration</h5>
                    <p>Lorem ipsum dolor sit amet, consecutivtur adipising</p>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>
                <h5>$45.99</h5>
              </td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
