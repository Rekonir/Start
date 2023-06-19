import { FC, useState } from 'react'
import { ISubcomment } from '../../types/types'
import styles from './CommentBox.module.scss'
import avatar from '../../assets/img/svg/avatar.svg'
import { useTranslation } from 'react-i18next'

interface SubcommentItemProps {
    subcomment: ISubcomment
}

const SubcommentItem: FC<SubcommentItemProps> = ({ subcomment }) => {

    const { t } = useTranslation()

  return (
    <div className={styles.subcomment} key={subcomment.id}>

        <div className={styles.commentHeader}>
            <div className={styles.userName}>
                <img src={avatar} alt="" className={styles.avatar} />
                <h3 className={styles.commentAuthor}> {subcomment.user.login}</h3>
            </div>
        </div>

        <p className={styles.text}>{subcomment.text}</p>
        <div className={styles.like}>
            <img src="https://start.ru/static/images/product/like.svg" alt="" />
            42
        </div>

        {/* {showCommentForm && isAuth &&
            <CommentForm type={"subcomment"}
                parentCommentId={subcomment.id}
                addNewSubcomment={addNewSubcomment}
                closeForm={() => setShowCommentForm(false)}
            />
        }

        {showCommentForm && !isAuth &&
            <p>Сначала авторизуйтесь</p>
        } */}

        {/* {newSubcomments.map((subcommentItem) => (
            <SubcommentItem subcomment={subcommentItem} key={`${subcomment.id} ${subcommentItem.id}`}/>
        ))}

        {subcomment.subcomments.map((subcommentItem) => (
            <SubcommentItem subcomment={subcommentItem} key={`${subcomment.id} ${subcommentItem.id}`}/>
        ))} */}
    </div>
  )
}

export default SubcommentItem