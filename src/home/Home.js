import React from "react";
import "./Home.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <main role="main">
        <div class="jumbotron card-principal">
          <div class="container">
            <h1 class="display-3">Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <a
                class="btn btn-primary btn-lg"
                href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#"
                role="button"
              >
                Learn more »
              </a>
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a
                  class="btn btn-secondary"
                  href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#"
                  role="button"
                >
                  View details »
                </a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a
                  class="btn btn-secondary"
                  href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#"
                  role="button"
                >
                  View details »
                </a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a
                  class="btn btn-secondary"
                  href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#"
                  role="button"
                >
                  View details »
                </a>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>

      <footer class="container">
        <p>© Company 2017-2018</p>
      </footer>
    </div>
  );
};

export default Home;
