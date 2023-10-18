import React from "react";
import star from "../Images/star.png";
import profile from "../Images/profile.png";
import "./common.css";
import dash from "../Images/dashboard.png";

export default function SideMenu() {
  return (
    <div>
      <div className="Title">
        <i class="fa-solid fa-warehouse"></i>
        <h1>Dashboard</h1>
      </div>
      <div className="List">
        <div className="sideN task1">
          <div>
                <p className="sideN1">
                 <i class="fa-solid fa-shield-halved"></i>Dashboard
                </p>
          </div>


        </div>

        <div className="sideN task2">
          <div>
                <h4 className="sideN1">
                <i class="fa-brands fa-product-hunt"></i>Product
                </h4>
          </div>

          <div>
            &gt;
          </div>
          
        </div>
        <div className="sideN task3">
          <div>
                <h4 className="sideN1">
                <i class="fa-regular fa-address-card"></i>Customers
                </h4>
          </div>

          <div>
            &gt;
          </div>
          
        </div>
        <div className="sideN task4">
          <div>
                <h4 className="sideN1">
                <i class="fa-solid fa-money-check-dollar"></i>Income
                </h4>
          </div>

          <div>
            &gt;
          </div>
          
        </div>
        <div className="sideN task5">
          <div>
                <h4 className="sideN1">
                <i class="fa-solid fa-square-poll-vertical"></i>Promote
                </h4>
          </div>

          <div>
            &gt;
          </div>
          
        </div>
        <div className="sideN task6">
          <div>
                <h4 className="sideN1">
                <i class="fa-brands fa-hire-a-helper"></i>Help
                </h4>
          </div>

          <div>
            &gt;
          </div>
          
        </div>
        

      </div>
      <div className="Profile">
        <div>
          <img src={profile} alt="" width={40} style={{ marginTop: "0px" }} />
        </div>
        <div>
          <h4>Balaji</h4>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  );
}
