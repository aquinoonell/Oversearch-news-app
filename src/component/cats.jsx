import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CatFact = ({ isDarkMode }) => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCatFact = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact);
    } catch (error) {
      setError("Unable to fetch cat fact");
      console.error("Error fetching cat fact:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container py-5 ${isDarkMode ? 'bg-dark text-light' : ''}`}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className={`card border-0 shadow-sm ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
            <div className="card-body text-center p-5">
              <h2 className={`card-title mb-4 ${isDarkMode ? 'text-light' : ''}`}>
                Cat Fact of the Moment 
              </h2>
              
              {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : error ? (
                <div className={`alert ${isDarkMode ? 'alert-danger' : 'alert-danger'}`}>
                  {error}
                </div>
              ) : (
                <blockquote className="blockquote mb-4">
                  <p className={`lead ${isDarkMode ? 'text-light-50' : ''}`}>
                    {fact || "Click the button to discover a fascinating cat fact!"}
                  </p>
                </blockquote>
              )}
              
              <button 
                className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'}`}
                onClick={fetchCatFact}
                disabled={isLoading}
              >
                {isLoading ? "Fetching..." : "Get New Fact"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatFact;
