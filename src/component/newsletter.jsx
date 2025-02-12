import { useState } from "react";
import "bootstrap";

function NewsLetter() {
    return (
        <>
            <section class="bg-primary text-light p-3">
                <div class="container">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <h3 class="mb-3 mb-md-0"><span class="text-dark">Sign Up </span> For Our Newsletter</h3>

                        <div class="input-group news-input">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Email"
                            />
                            <button class="btn btn-dark btn-lg" type="button">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsLetter;
