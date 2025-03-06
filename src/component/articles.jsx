import React, { useState } from "react";
import axios from "axios";

const ArticleFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 20;

  const fetchNews = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:5100/fetch-headlines",
        {
          params: {
            country: "us",
            categories: "general",
            page: page,
            pageSize: pageSize,
          },
        },
      );

      setArticles((prevArticles) => [
        ...prevArticles,
        ...response.data.articles,
      ]);

      if (response.data.totalResults) {
        setTotalPages(Math.ceil(response.data.totalResults / pageSize));
      }
    } catch (err) {
      console.log(err.response || err);
      setError("Failed to fetch the news.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      fetchNews(newPage);
    }
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
                          <div className="row g-0 bg-body-muted position-relative">
                            {/* Image Section */}
                            {article.urlToImage && (
                              <div className="col-md-6 mb-md-0 p-md-4">
                                <img
                                  src={article.urlToImage}
                                  className="w-75"
                                  alt={article.title}
                                  style={{ objectFit: "cover", height: "auto" }}
                                />
                              </div>
                            )}

                            {/* Text Section */}
                            <div
                              className={`col-md-6 p-4 ps-md-0 ${article.urlToImage ? "" : "text-center"}`}
                            >
                              <h5 className="mt-0">
                                <a
                                  href={article.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="stretched-link"
                                >
                                  {article.title}
                                </a>
                              </h5>
                              <p className="text-light">{article.description}</p>
                            </div>
                          </div>
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
                {articles?.length === 1 && !loading && (
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
