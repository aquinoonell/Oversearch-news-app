import React, { useState } from "react";
import axios from "axios";

const ArticleFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [articleUrl, setArticleUrl] = useState(""); // Store URL input

  const fetchArticle = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:5100/fetch-article", {
        params: { url: articleUrl }, // Send the article URL as a query parameter
      });
      setArticle(response.data.article); // Assuming the server returns the article in this structure
    } catch (err) {
      console.log(err.response || err);
      setError("Failed to fetch the article.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-2">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Article</h3>

                <input
                  type="text"
                  value={articleUrl}
                  onChange={(e) => setArticleUrl(e.target.value)}
                  placeholder="Enter article URL"
                  className="form-control mb-3"
                />

                {error && (
                  <Alert variant="danger" className="mt-3">
                    {error}
                  </Alert>
                )}
                <button
                  onClick={fetchArticle}
                  className="btn btn-primary btn-lg btn-expand-sm"
                  type="submit"
                  disabled={loading || !articleUrl}
                >
                  {loading ? "Subscribing..." : "Submit"}
                </button>
                {article && (
                  <div
                    className="card-text mt-3"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {article}
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

export default ArticleFetcher;
