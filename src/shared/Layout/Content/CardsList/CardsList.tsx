import React from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { IPostsState } from "../../../../store/posts/postsReducer";
import { IRootState } from "../../../../store/reducer";
import { fetchPostsAsync } from "../../../../store/posts/postsActions";
import { Text } from "../../../helpers/Text";

export function CardsList() {
  const token = useSelector<IRootState, string>((store) => store.token.data);
  const { data, loading, error, after, fetchCounter } = useSelector<
    IRootState,
    IPostsState
  >((store) => store.posts);
  const dispatch = useDispatch();

  const bottomOfList = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!token || token === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          (fetchCounter % 3 !== 0 || fetchCounter === 0)
        ) {
          // @ts-ignore
          dispatch(fetchPostsAsync(token, after));
        }
      },
      {
        rootMargin: "20px",
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [token, bottomOfList.current, after]);

  return (
    <ul className={styles.cardsList}>
      {data.length === 0 && !loading && !error && (
        <Text size={28} mobileSize={20} As={"p"} className={styles.center}>
          Нет ни одного поста
        </Text>
      )}

      {data.map((p) => {
        return (
          <Card
            postId={p.postId}
            name={p.name}
            author={p.author}
            title={p.title}
            karma={p.karma}
            imgUrl={p.imgUrl}
            created={p.created}
            commentsQty={p.commentsQty}
            subreddit={p.subreddit}
            key={p.postId}
          />
        );
      })}

      <div ref={bottomOfList} />

      {loading && (
        <Text size={28} mobileSize={20} As={"p"} className={styles.center}>
          Загрузка...
        </Text>
      )}
      {error && (
        <Text
          size={28}
          mobileSize={20}
          As={"p"}
          className={`${styles.center} ${styles.error}`}
        >
          {error}
        </Text>
      )}
      {fetchCounter % 3 === 0 && fetchCounter !== 0 && (
        <button
          className={styles.moreButton}
          onClick={() => {
            //@ts-ignore
            dispatch(fetchPostsAsync(token, after));
          }}
        >
          Загрузить еще
        </button>
      )}
    </ul>
  );
}
