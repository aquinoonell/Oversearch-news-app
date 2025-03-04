import { useState } from "react";
import "bootstrap";

function Showcase() {
  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h2>
                Become a <span className="text-primary">Polical Head</span>
              </h2>
              <p className="lead my-4">
                If you don't know, who Hasan is. Don't worry, is never too late.
                This website is going to be designed to help you navigate
                political views, in a fun matter.
              </p>
            </div>
            <img
              className="img-fluid w-50 d-none py-5 d-sm-block img-sm-start"
              src="/img/learning.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/img/options.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Let's talk about the Political Parties :
                <br />
                <br />
                <li>
                  <span className="text-primary">The Democrats</span> - They’re
                  all about using government power to help people and make
                  society fairer. Their focus is on things like healthcare for
                  all, environmental protections, and social equality.
                </li>
                <li>
                  <span className="text-danger">The Republicans</span> - They
                  believe in a more limited role for government, lower taxes,
                  and that people should be able to take care of themselves
                  without a lot of government intervention. They focus on
                  personal freedom and responsibility, with an emphasis on a
                  free-market economy.
                </li>
              </p>
              <p className="lead">
                At this point you should already know which way you're leaning
                towards, you can't choose wrong, just don't follow a party
                because your dad said so, to summarize everything you read
                here's a simple description.
                <br />
                <br />
                <li>
                  <span className="text-primary">Democrats</span>: More focused
                  on community, equity, and using government power for social
                  good.
                </li>
                <li>
                  <span className="text-danger">Republicans</span>: More focused
                  on personal freedom, limited government, and preserving
                  traditional values.
                </li>
                <br />
                The fun comes from the drama and constant back-and-forth between
                these two teams, each trying to push the country in their own
                direction. It’s like a political tug-of-war where they both
                think they’re making the best play for the future! We are using
                colors to help you distinguish the parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="p-5">
        <div className="container">
          <div className="col-md p-5">
            <h2>How to use?</h2>
            <p className="lead">
              This is a brief explanation on how to use the website!
            </p>
            <li>
              Copy any url you'll like to read into the Article search box.
            </li>
            <li>Once you have copied the url, and click the submit button.</li>
            <li>Enjoy the articel without any adds or distracting images.</li>
            <p className="lead"></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
