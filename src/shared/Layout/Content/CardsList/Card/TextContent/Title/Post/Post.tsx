import React from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import { useCommentsData } from "../../../../../../../../hooks/useCommentsData";
import { Comment } from "./Comment";
import { KarmaCounter } from "../../../Controls/KarmaCounter";
import { TextContent } from "../../TextContent";
import { Break } from "../../../../../../../helpers/Break";
import { GenericList, IItem } from "../../../../../../../helpers/GenericList";
import { EIcon, Icon } from "../../../../../../../helpers/Icon";
import { Text } from "../../../../../../../helpers/Text";
import { EColor } from "../../../../../../../../types/EColor";
import { generateId } from "../../../../../../../../utils/react/generateRandomIndex";
import { CommentFormContainer } from "./CommentFormContainer";
import { FormProvider, useForm } from "react-hook-form";
import { ICommentForm } from "../../../../../../../UI/CommentForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../../../../store/reducer";
import { IPostStoreData } from "../../../../../../../../types/IPostStoreData";
import { NotFoundPage } from "../../../../../../../UI/NotFoundPage";

const MENU_BUTTONS: IItem[] = [
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.commentsButton }`,
    children:
      <>
        <Icon name={ EIcon.Comments } width={ 16 } height={ 16 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Ответить</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.shareButton }`,
    children:
      <>
        <Icon name={ EIcon.Share } width={ 12 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Поделиться</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.hide }`,
    children:
      <>
        <Icon name={ EIcon.Hide } width={ 12 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Скрыть</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.save }`,
    children:
      <>
        <Icon name={ EIcon.Save } width={ 12 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Сохранить</Text>
      </>,
  },
  {
    As: 'button' as const,
    className: `${ styles.commonButton } ${ styles.complainButton }`,
    children:
      <>
        <Icon name={ EIcon.Warning } width={ 16 } height={ 14 }/>
        <Text size={ 14 } mobileSize={ 12 } color={ EColor.gray99 }>Пожаловаться</Text>
      </>,
  }
].map(generateId);

export function Post() {
  const ref = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname.substr(7);
  const postData =
    useSelector<IRootState, IPostStoreData | undefined>(store => store.posts.data.filter(p => p.postId === path).pop());
  if (postData === undefined)
    return <NotFoundPage description={ `There is not post with id = ${ path }` }/>

  const { postId, title, author, imgUrl, subreddit, created } = postData;
  const [ commentsData ] = useCommentsData(subreddit, postId);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/');
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, []);

  const methods = useForm<ICommentForm>();

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={ styles.modal } ref={ ref }>
      <div className={ styles.textContent }>
        <KarmaCounter karma={ 10 }/>
        <Break size={ 20 } inline/>
        <TextContent author={ author } postId={ postId } title={ title } created={ created }/>
      </div>

      <img className={ styles.img } src={ imgUrl } alt='Post_image'/>

      <div className={ styles.menu }>
        <div className={ styles.menuButtons }>
          <GenericList list={ MENU_BUTTONS }/>
        </div>
        <Text size={ 14 } color={ EColor.orange }>X% Проголосовали</Text>
      </div>

      <FormProvider { ...methods }>
        <CommentFormContainer/>
        { commentsData.comments.map((comment) => {
          return <Comment author={ comment.author } created={ comment.created } body={ comment.body }
                          key={ comment.commentId }/>
        }) }
      </FormProvider>
    </div>
  ), node);
}
