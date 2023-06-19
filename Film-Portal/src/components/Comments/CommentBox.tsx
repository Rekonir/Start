import { FC, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import styles from './CommentBox.module.scss'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TranscriptionData from '../../TranscriptionData.json'
import { IComment, ISubcomment } from "../../types/types";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import { useTranslation } from "react-i18next";

interface CommentBoxProps {
    filmComments: IComment[]
}

const CommentBox: FC<CommentBoxProps> = ({ filmComments }) => {

    const { t } = useTranslation()

    const [newComments, setNewComments] = useState<IComment[]>([])
    const { user, isAuth } = useAppSelector(state => state.userReducer)
    const [showCommentForm, setShowCommentForm] = useState(false)

    console.log('user', user)
    
    const addNewComment = (newComment: IComment) => {
        setNewComments([...newComments, newComment])
    }

    return (
        <div className={styles.commentBox} data-testid='Comment'>

            {filmComments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}

            {newComments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
            
            {!showCommentForm &&
                <div onClick={() => setShowCommentForm(true)} data-testid='addComment' className={styles.btn}>
                    <Button> {t('Button.add_Comment')} </Button>
                </div>
            }

            {showCommentForm  && isAuth &&
                <CommentForm type={"comment"}
                    addNewComment={addNewComment}
                    closeForm={() => setShowCommentForm(false)}
                />
            }

            {showCommentForm && !isAuth &&
                <p>{t('log_in_first')}</p>
            }

        </div>
    );
};

export default CommentBox;