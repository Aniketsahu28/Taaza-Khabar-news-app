import React from "react-dom";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="card my-3" style={{ margin: "0px 1.5vw" }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p>
          source : <strong>{source}</strong>
        </p>
        <p className="card-text">
          <small className="text-muted">
            By {!author ? "unkown" : author} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          rel="noreferrer"
          href={newsUrl}
          target="_blank"
          className="btn btn-sm btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
