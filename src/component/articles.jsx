import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const ArticleFetcher = ({
  excludedArticles = [],
  onDisplayedArticlesChange,
  isDarkMode,
}) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 10;
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchArticles(1);
  }, []);

  useEffect(() => {
    if (onDisplayedArticlesChange) {
      onDisplayedArticlesChange(articles);
    }
  }, [articles, onDisplayedArticlesChange]);

  const fetchArticles = async (pageToFetch) => {
    setLoading(true);
    setError(null);

    try {
      const uniqueUrls = new Set(articles.map((a) => a.url));

      const response = await axios.get(
        apiUrl,
        {
          params: {
            page: pageToFetch,
            pageSize: pageSize,
          },
          headers: {
            "X-Api-Key": apiKey,
          },
        },
      );

      if (!response.data || !response.data.articles) {
        throw new Error("Invalid API response structure");
      }

      const newArticles = response.data.articles.filter(
        (article) =>
          !uniqueUrls.has(article.url) &&
          !excludedArticles.some((excluded) => excluded.url === article.url),
      );

      const combinedArticles =
        pageToFetch === 1 ? newArticles : [...articles, ...newArticles];

      setArticles(combinedArticles);
      setPage(pageToFetch);

      setTotalResults(response.data.totalResults);
    } catch (err) {
      console.error("Error fetching articles:", err);
      const errorMessage = err.response?.status === 403 
        ? "CORS error: Unable to access the API. Please try again later."
        : "Unable to fetch news at the moment";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    fetchArticles(nextPage);
  };

  const hasMoreArticles = articles.length < totalResults;

  return (
    <div className={`container py-5 ${isDarkMode ? "bg-dark text-light" : ""}`}>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2
            className={`pb-4 mb-4 border-bottom ${isDarkMode ? "text-light" : ""}`}
          >
            Technology Articles
          </h2>

          {error && (
            <div
              className={`alert ${isDarkMode ? "alert-danger" : "alert-danger"} text-center`}
              role="alert"
            >
              {error}
            </div>
          )}

          {articles.map((article, index) => (
            <div
              key={article.url}
              className={`row mb-5 g-0 border rounded overflow-hidden flex-md-row shadow-lg position-relative ${isDarkMode ? "bg-secondary text-light" : ""}`}
              style={{
                minHeight: "250px",
                maxHeight: "350px",
              }}
            >
              <div className="col-md-4 d-none d-md-block">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    maxHeight: "350px",
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x250.png?text=Dev.to+Article`;
                  }}
                />
              </div>

              <div className="col-md-8 p-4 d-flex flex-column">
                <strong
                  className={`d-inline-block mb-2 ${isDarkMode ? "text-primary-50" : "text-primary"}`}
                >
                  {article.source.name}
                </strong>
                <h3 className={`mb-3 ${isDarkMode ? "text-light" : ""}`}>
                  {article.title}
                </h3>
                <div
                  className={`mb-2 small ${isDarkMode ? "text-light-50" : "text-body-secondary"}`}
                >
                  {new Date(article.publishedAt).toLocaleDateString()}
                  {article.author && ` | ${article.author}`}
                </div>
                <p
                  className={`card-text mb-3 ${isDarkMode ? "text-light-50" : "text-muted"}`}
                >
                  {article.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${isDarkMode ? "btn-outline-light" : "btn-primary"}`}
                  >
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
          ))}

          {hasMoreArticles && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className={`btn ${isDarkMode ? "btn-outline-light" : "btn-outline-primary"} btn-lg`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More Articles"}
              </button>
            </div>
          )}

          {!hasMoreArticles && articles.length > 0 && (
            <div
              className={`text-center mt-4 ${isDarkMode ? "text-light-50" : "text-muted"}`}
            >
              No more articles to load
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleFetcher;
