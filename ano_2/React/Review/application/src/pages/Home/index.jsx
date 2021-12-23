import { useState, useEffect,useCallback } from "react";

import "./styles.css";

import { getPost } from "../../utils/getPost";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { Search } from "./../../components/Search/index";
import { NoPostText } from "../../components/NoPostText";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");

  const isHasPost = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;


  const loadPost = useCallback(async (page,postsPerPage) => {
    const postsAndPhotos = await getPost();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  },[])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    loadPost(0, postsPerPage);
  },[loadPost, postsPerPage]);

  return (
    <main>
      {!!searchValue && ( // circuit break
        <>
          <h2 className={"search-text"}>Results for: {searchValue}</h2>
        </>
      )}
      <Search callFunction={handleSearch} searchValue={searchValue} />
      {filteredPosts.length === 0 && <NoPostText />}

      <section>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      </section>

      <div className={"button-container"}>
        {!searchValue && ( // circuit break
          <Button
            text="load more posts"
            callFunction={loadMorePosts}
            disabled={isHasPost}
          />
        )}
      </div>
    </main>
  );
};


export default Home;
