import { FC, useState } from 'react'
import Button from '../UI/Button/Button'
import styles from './CommentBox.module.scss'
import { sendComment, sendSubcomment } from '../../store/actions/commentActions'
import { useAppSelector } from '../../hooks/redux'
import { IComment, ISubcomment } from '../../types/types'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

interface CommentFormProps {
    type: 'comment' | 'subcomment'
    parentCommentId?: number
    addNewComment?: (newComment: IComment) => void
    addNewSubcomment?: (newComment: ISubcomment)  => void
    closeForm: () => void
}

const CommentForm: FC<CommentFormProps> = ({ type, parentCommentId, addNewComment, addNewSubcomment, closeForm }) => {

    const { t } = useTranslation()

    const { id } = useParams()
    
    const { user } = useAppSelector(state => state.userReducer)
    const [text, setText] = useState('')

    const addComment = () => {

        if (type === 'comment' && addNewComment && id) {
            sendComment( +id, user.id, user.email, text )
            
            const newComment: IComment = {
                createdAt: '',
                id: 0,
                text: text,
                subcomments: [],
                user: {
                    id: user.id,
                    login: user.email
                }
            }
            addNewComment(newComment)
        }
        if (type === 'subcomment' && addNewSubcomment && id) {
            sendSubcomment( +id, parentCommentId || 0, user.id, user.email, text )

            const newSubcomment: ISubcomment = {
                createdAt: '',
                id: 1,
                text: text,
                user: {
                    id: user.id,
                    login: user.email
                }
            }
            
            addNewSubcomment(newSubcomment)
        }

        closeForm()
    }
    
  return (
    <div className={styles.addCommentBox} data-testid='newCommetnBox' >
        <h3 className={styles.commentAuthor}>{user.email}</h3>
        <textarea className={styles.addCommentBoxText}
            placeholder={t('enter_comment_text')}
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <div onClick={addComment} data-testid='Post' className={styles.btn}>
            <Button>{t('Button.public')}</Button>
        </div>
    </div>
  )
}

export default CommentForm