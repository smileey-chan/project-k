import React from "react";

function LoadingPage() {
  return (
    <>
      <style>
        {`
        .loading-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f6fa;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid #dcdcdc;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-text {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 500;
          color: #555;
        }
      `}
      </style>

      <div className="loading-container">
        <div style={{ textAlign: "center" }}>
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
