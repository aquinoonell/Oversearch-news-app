import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RowGrid({ isDarkMode }) {
  return (
    <section className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-white'}`} id="aboutUs">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className={`pb-4 mb-4 border-bottom text-center ${isDarkMode ? 'text-light' : ''}`}>
              About the Project
            </h2>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className={`card h-100 border-0 shadow-sm ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                  <div className="card-body text-center">
                    <h4 className={`card-title mb-3 ${isDarkMode ? 'text-primary-50' : 'text-primary'}`}>
                      Who Am I?
                    </h4>
                    <p className={`${isDarkMode ? 'text-light-50' : 'text-muted'}`}>
                      My name is Onell, an aspiring Software Engineer passionate about 
                      creating meaningful web experiences that inform and engage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className={`card h-100 border-0 shadow-sm ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                  <div className="card-body text-center">
                    <h4 className={`card-title mb-3 ${isDarkMode ? 'text-success-50' : 'text-success'}`}>
                      Why a News Website?
                    </h4>
                    <p className={`${isDarkMode ? 'text-light-50' : 'text-muted'}`}>
                      Driven by a passion for news and information, I aim to create 
                      a platform that makes political insights accessible and engaging.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className={`card h-100 border-0 shadow-sm ${isDarkMode ? 'bg-secondary text-light' : ''}`}>
                  <div className="card-body text-center">
                    <h4 className={`card-title mb-3 ${isDarkMode ? 'text-warning-50' : 'text-warning'}`}>
                      Cat Facts?
                    </h4>
                    <p className={`${isDarkMode ? 'text-light-50' : 'text-muted'}`}>
                      A touch of fun amidst serious news. As a cat lover, I've 
                      added a playful section to lighten the mood and share 
                      interesting feline trivia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RowGrid;
