import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import commentsApi from 'src/api/commentsApi';
import { useAppSelector } from 'src/store';
import type { CommentType } from 'src/types';

import Button from 'src/ui/components/Button';
import StyledComments from 'src/ui/pages/BookPage/Comments/Comments.styled';

import noPhoto from 'src/ui/assets/images/user-profile.png';

const Comments: React.FC = () => {
  const [comment, setComment] = React.useState<CommentType[]>([]);
  const [commentText, setCommentText] = React.useState('');

  const user = useAppSelector((store) => store.user.user);

  const { bookId } = useParams();

  const date = dayjs();

  const noAvatar = 'http://localhost:4000/public/avatars/null';

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleSetComment = async (userId: number, bookId: number, text: string) => {
    await commentsApi.addComment({ userId, bookId, text });
    const newComment: CommentType = {
      id: Math.round(Math.random() * 100),
      text,
      createdTime: date.format('YYYY-MM-DD HH:MM:CC'),
      user: user!,
      userId,
      bookId,
    };
    setComment([...comment, newComment]);
    setCommentText('');
  };

  React.useEffect(() => {
    (async () => {
      const res = await commentsApi.getComments(Number(bookId));
      setComment(res.data.comments);
    })();
  }, [bookId]);

  return (
    <StyledComments>
      <h1 className="header">Comments</h1>
      {comment.map((userComment) => {
        return (
          <div className="comment" key={userComment.id}>
            <img className="avatar" src={userComment.user.avatar === noAvatar ? noPhoto : userComment.user.avatar} />

            <h1 className="author">{userComment.user.fullName}</h1>
            <p className="date">{userComment.createdTime}</p>
            <p className="text">{userComment.text}</p>
          </div>
        );
      })}
      {user
        ? (
          <>
            <textarea
              className="textarea"
              placeholder="Share a comment"
              value={commentText}
              onChange={handleChangeComment}
            />

            <Button
              className="comment_button"
              type="submit"
              onClick={() => handleSetComment(user!.id, Number(bookId), commentText)}
            >
              Post a comment
            </Button>
          </>
        )
        : null}

    </StyledComments>
  );
};

export default Comments;
