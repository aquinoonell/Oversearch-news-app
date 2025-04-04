import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Showcase({ isDarkMode }) {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchFeaturedArticles = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5100/fetch-articles", {
        params: {
          page: 1,
          pageSize: 10
        }
      });

      const articles = response.data.articles.filter(article => 
        article.urlToImage && article.description
      );

      setFeaturedArticles(articles);
      
      if (articles.length > 0) {
        setSelectedArticle(articles[0]);
      }
    } catch (error) {
      console.error("Error fetching featured articles:", error);
    }
  }, []);

  useEffect(() => {
    fetchFeaturedArticles();
  }, [fetchFeaturedArticles]);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className={`container mt-5 pt-5 ${isDarkMode ? 'bg-dark text-light' : ''}`}>
      <div className="row g-5">
        <div className="col-md-8">
          {selectedArticle && (
            <div className={`p-4 p-md-5 mb-4 rounded ${isDarkMode ? 'bg-secondary text-light' : 'text-body-emphasis bg-body-secondary'}`}>
              <div className="row">
                <div className="col-lg-6 px-0">
                  <h1 className={`display-4 ${isDarkMode ? 'text-light' : 'fst-italic'}`}>
                    {selectedArticle.title}
                  </h1>
                  <p className={`lead my-3 ${isDarkMode ? 'text-light-50' : ''}`}>
                    {selectedArticle.description}
                  </p>
                  <div className={`mb-3 ${isDarkMode ? 'text-light-50' : 'text-body-secondary'}`}>
                    Published on {new Date(selectedArticle.publishedAt).toLocaleDateString()}
                    {selectedArticle.author && ` by ${selectedArticle.author}`}
                  </div>
                  <a 
                    href={selectedArticle.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'}`}
                  >
                    Continue reading
                  </a>
                </div>
                <div className="col-lg-6">
                  <img 
                    src={selectedArticle.urlToImage} 
                    alt={selectedArticle.title} 
                    className="img-fluid rounded"
                    style={{
                      width: '100%', 
                      height: '250px', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x250.png?text=Dev.to+Article`;
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{top: '2rem'}}>
            <div className={`p-4 mb-3 ${isDarkMode ? 'bg-secondary text-light' : 'bg-body-tertiary'}`}>
              <h4 className={`fst-italic ${isDarkMode ? 'text-light' : ''}`}>
                Recent Articles
              </h4>
              {featuredArticles.slice(1, 5).map((article, index) => (
                <div 
                  key={index} 
                  className={`mb-3 border-bottom pb-3 ${selectedArticle === article ? (isDarkMode ? 'bg-dark' : 'bg-light') : ''}`}
                  onClick={() => handleArticleSelect(article)}
                  style={{cursor: 'pointer'}}
                >
                  <div className="row g-0 overflow-hidden flex-md-row position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className={`d-inline-block mb-2 ${isDarkMode ? 'text-primary-50' : 'text-primary'}`}>
                        {article.source.name}
                      </strong>
                      <h6 className={`mb-0 ${isDarkMode ? 'text-light' : ''}`}>
                        {article.title}
                      </h6>
                      <div className={`mb-1 ${isDarkMode ? 'text-light-50' : 'text-body-secondary'}`}>
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </div>
                      <p className={`card-text mb-auto ${isDarkMode ? 'text-light-50' : 'text-muted small'}`}>
                        {article.description.length > 100 
                          ? article.description.substring(0, 100) + '...' 
                          : article.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
