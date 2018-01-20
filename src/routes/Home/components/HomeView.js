import React from "react";
import { Link } from "react-router";
import "./HomeView.scss";

export const HomeView = () => (
  <div className="site">
    <main className="content">
      <div className="container-duckbot">
        <div className="image-duckbot" />
      </div>
      <div className="hello-title">hello , I'm duckbot </div>
      <div className="debugging-title">The Debugging Bot</div>

      <div className="link-talk-with-me">
        <Link to="/chat" activeClassName="page-layout__nav-item--active">
          Talk with me
        </Link>
      </div>
    </main>
  </div>
);

export default HomeView;
