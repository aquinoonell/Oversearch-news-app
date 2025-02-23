import { useState } from "react";
import "bootstrap";

function RowGrid() {
  return (
    <>
      <section class="p-2" id="aboutUs">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3"></div>
                  <h3 class="card-title mb-3" href=" ">
                    Who Am I?
                  </h3>
                  <p class="col-md">
                    My name is Onell, I'm an aspiring Software Engineer. This
                    project is to showcase my skills as a full stack developer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3"></div>
                  <h3 class="card-title mb-3">Why a News Website?</h3>
                  <p class="card-text">
                    I wanted to do something I was passionate about, I love
                    reading about News and I wanted to provide you with
                    something that could reflect that, hopefully you can get to
                    enjoy reading and news as much as me.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3"></div>
                  <h3 class="card-title mb-3">Cat Facts?</h3>
                  <p class="card-text">
                    Well you probably confused about the Cat Facts section, it's
                    not a secret I'm a cat lover and I just wanted to integrate
                    something fun and insightful, to make sure not only you get
                    to learn about policial news but also about cats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RowGrid;
