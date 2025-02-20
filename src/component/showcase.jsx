import { useState } from "react";
import "bootstrap";
import CatFact from "./cats";

function Showcase() {
    return (
        <>
            <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div class="container">
                    <div class="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h2>
                                Become a <span class="text-primary">Hasanabi Head</span>
                            </h2>
                            <p class="lead my-4">
                                If you don't know, who Hasan is. Don't worry, is never too late.
                            </p>
                        </div>
                        <img
                            class="img-fluid w-50 d-none py-5 d-sm-block img-sm-start"
                            src="/img/newsletter.svg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section id="learn" class="p-5">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md">
                            <img src="/img/posts.svg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-md p-5">
                            <h2>Learn The Fundamentals</h2>
                            <p class="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique deleniti possimus magnam corporis ratione facere!
                            </p>
                            <p class="lead">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                quae similique laboriosam iste minus placeat odit velit quos,
                                nulla architecto amet voluptates?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="" class="p-5">
                <div class="container">
                    <div class="col-md p-5">
                        <h2>Other</h2>
                        <p class="lead">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Similique deleniti possimus magnam corporis ratione facere!
                        </p>
                        <p class="lead">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                            reiciendis eius autem eveniet mollitia, at asperiores suscipit
                            quae similique laboriosam iste minus placeat odit velit quos,
                            nulla architecto amet voluptates? Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Cumque reiciendis eius autem eveniet
                            mollitia, at asperiores suscipit quae similique laboriosam iste
                            minus placeat odit velit quos, nulla architecto amet voluptates?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                            reiciendis eius autem eveniet mollitia, at asperiores suscipit
                            quae similique laboriosam iste minus placeat odit velit quos,
                            nulla architecto amet voluptates? Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Cumque reiciendis eius autem eveniet
                            mollitia, at asperiores suscipit quae similique laboriosam iste
                            minus placeat odit velit quos, nulla architecto amet voluptates?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                            reiciendis eius autem eveniet mollitia, at asperiores suscipit
                            quae similique laboriosam iste minus placeat odit velit quos,
                            nulla architecto amet voluptates? Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Cumque reiciendis eius autem eveniet
                            mollitia, at asperiores suscipit quae similique laboriosam iste
                            minus placeat odit velit quos, nulla architecto amet voluptates?
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Showcase;
