const PostList = ({ blogs }) => {
  return (
    <>
      Samheart
      {blogs.map((blog) => {
        return (
          <div key={blog.imdbID}>
            <h3>{blog.Title}</h3>
            <img src={blog.Poster} alt="not yet" />
          </div>
        );
      })}
    </>
  );
};

export default PostList;
