import { FC, useState } from 'react'
import styles from './CommentBox.module.scss'
import Button from '../UI/Button/Button'
import avatar from '../../assets/img/svg/avatar.svg'
import { IComment, ISubcomment } from '../../types/types';
import { useTranslation } from 'react-i18next';
import CommentForm from './CommentForm';
import { useAppSelector } from '../../hooks/redux';
import SubcommentItem from './SubcommentItem';

interface CommentItemProps {
    // id: number;
    // author: string;
    // text: string;
    // subcomments: ISubcomment[]
    comment: IComment
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {

    const { t } = useTranslation()

    const [newSubcomments, setNewSubcomments] = useState<ISubcomment[]>([])
    const { user, isAuth } = useAppSelector(state => state.userReducer)

    const [showCommentForm, setShowCommentForm] = useState(false)

    const addNewSubcomment = (newSubcomment: ISubcomment) => {
        console.log('new', newSubcomment)
        setNewSubcomments([...newSubcomments, newSubcomment])
        console.log('com', newSubcomments)
    }

  return (
    <div className={styles.comment} >

        <div className={styles.commentHeader}>
            <div className={styles.userName}>
                <img src={avatar} alt="" className={styles.avatar} />
                <h3 className={styles.commentAuthor}>{comment.user.login}</h3>
            </div>
            {!showCommentForm &&
                <div onClick={() => setShowCommentForm(true)} data-testid='answer'>
                    <Button variant='outlined'> {t('Button.answer')} </Button>
                </div>
            }
        </div>

        <p className={styles.text}>{comment.text}</p>
        <div className={styles.like}>
            <img src="https://start.ru/static/images/product/like.svg" alt="" />
            42
        </div>

        {showCommentForm && isAuth &&
            <CommentForm type={"subcomment"}
                parentCommentId={comment.id}
                addNewSubcomment={addNewSubcomment}
                closeForm={() => setShowCommentForm(false)}
            />
        }

        {showCommentForm && !isAuth &&
            <p>{t('log_in_first')}</p>
        }

        {newSubcomments.map((subcomment, index) => (
            <SubcommentItem subcomment={subcomment} key={`${comment.id} ${subcomment.id} ${index}`} />
        ))}

        {comment.subcomments.map((subcomment, index) => (
            <SubcommentItem subcomment={subcomment} key={`${comment.id} ${index} ${subcomment.id}`}/>
        ))}
    </div>
  )
}

export default CommentItem