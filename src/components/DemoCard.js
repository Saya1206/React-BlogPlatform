import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";
import blog3 from "../Assets/blog4.jpg";
import nature1 from "../Assets/nature1.jpg";
import travel from "../Assets/travel1.jpg";
import success from "../Assets/success.jpg";
import family from "../Assets/family.jpg";
import sports from "../Assets/sports.jpg";

export default function DemoCard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Educational Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={blog3}
                alt="blog3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Educational Blog</h5>
                <p className="card-text">
                  Education is the transmission of knowledge, skills, and
                  character traits.
                </p>
                <Link to="/educational-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Travelling Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={travel}
                alt="travel"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Travelling</h5>
                <p className="card-text">
                  India ranks 54th in the World Economic Forum's Travel and
                  Tourism Development Index 2021.
                </p>
                <Link to="/travel-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Nature Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={nature1}
                alt="nature1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Nature</h5>
                <p className="card-text">
                  Nature encompasses the laws, elements, and phenomena of the
                  physical world.
                </p>
                <Link to="/nature-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Success Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={success}
                alt="nature1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Success</h5>
                <p className="card-text">
                  Success is the achievement of personal or professional goals,
                  bringing fulfillment and growth.
                </p>
                <Link to="/success-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Family Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={family}
                alt="nature1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Family</h5>
                <p className="card-text">
                  Family is a group of people related either by consanguinity
                  (by recognized birth) or affinity
                </p>
                <Link to="/family-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Sports Blog Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={sports}
                alt="nature1"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Sports</h5>
                <p className="card-text">
                  Sport is a form of physical activity or game. Often
                  competitive and organized, sports use, maintain, or improve
                  physical ability and skills.
                </p>
                <Link to="/sport-blog" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
