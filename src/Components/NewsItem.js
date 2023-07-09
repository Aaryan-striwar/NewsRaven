const NewsItem =(props)=> {
    let { title, description, iurl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display : "flex",
            justifyContent : 'flex-end',
            position : 'absolute',
            right : 0
          }}>
            <span
              class="badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>

          <img
            src={
              !iurl
                ? "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                : iurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-secondary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
