import { useState } from "react";
import axios from "axios"; 
import "bootstrap";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents the default form behavior (page reload)
        setLoading(true);
        setMessage("");

        try {
            // Send POST request to the backend
            const response = await axios.post("http://localhost:5200/api/subs", { email });

            if (response.data.success) {
                setMessage("Successfully subscribed!");
            } else {
                setMessage(response.data.error || "Something went wrong.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-primary text-light p-3">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0">
                        <span className="text-dark">Sign Up </span> For Our Newsletter
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group news-input">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                className="btn btn-dark btn-lg btn-expand-sm"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Subscribing..." : "Submit"}
                            </button>
                        </div>
                    </form>
                            {message && <div className="alert alert-info">{message}</div>}
                </div>
            </div>
        </section>
    );
};

export default NewsletterForm;

