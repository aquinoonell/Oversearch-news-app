import React, { useState } from "react";
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";

const NewsletterForm = ({ isDarkMode }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post("http://localhost:5200/api/subs", { email });

            setMessage(
                response.data.success 
                    ? "Successfully subscribed!" 
                    : response.data.error || "Something went wrong."
            );
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className={`card border-0 shadow-sm ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                            <div className="card-body p-5 text-center">
                                <h2 className={`mb-4 ${isDarkMode ? 'text-light' : ''}`}>
                                    Stay Informed
                                </h2>
                                <p className={`mb-4 ${isDarkMode ? 'text-light-50' : 'text-muted'}`}>
                                    Subscribe to our newsletter for the latest technology insights 
                                    and news delivered straight to your inbox.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className={`form-control ${isDarkMode ? 'bg-dark text-light' : ''}`}
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button
                                            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'}`}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? "Subscribing..." : "Subscribe"}
                                        </button>
                                    </div>
                                </form>
                                {message && (
                                    <div className={`alert ${message.includes('Successfully') ? (isDarkMode ? 'alert-success' : 'alert-success') : 'alert-danger'} mt-3`}>
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterForm;
