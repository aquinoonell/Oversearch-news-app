import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticleFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:5100/fetch-headlines",
        {
          params: {
            country: "us",
            categories: "general",
            page,
            limit: 5,
          },
        },
      );

      console.log(response.data.data);
      console.log(response);
      console.log(response.status);

      setArticles((prevArticles) => [...prevArticles, ...response.data.data]);
    } catch (err) {
      console.log(err.response || err);
      setError("Failed to fetch the news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]); // Re-Fetch whenever the page changes

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="p-2">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Top Headlines</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <button
                  onClick={fetchNews}
                  className="btn btn-primary btn-lg btn-expand-sm"
                  type="button"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Fetch Headlines"}
                </button>
                {articles?.length > 0 && (
                  <div className="mt-4">
                    <h5 className="mb-3">Latest News</h5>
                    <ul className="list-unstyled">
                      {articles.map((article, index) => (
                        <li key={index} className="mb-3">
                          <h6>
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {article.title}
                            </a>
                          </h6>
                          <p>{article.description}</p>
                          {/* Display image if available */}
                          {article.image_url && (
                            <img
                              src={article.image_url}
                              alt={article.title}
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={loadMore}
                      className="btn btn-secondary"
                      disabled={loading}
                    >
                      {loading ? "Loading More..." : "Load More"}
                    </button>
                  </div>
                )}
                {articles?.length === 0 && !loading && (
                  <div className="alert alert-info">No articles found.</div>
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
