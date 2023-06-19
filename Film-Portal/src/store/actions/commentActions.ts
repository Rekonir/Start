import axios from "axios";
import { IComment, ISubcomment } from "../../types/types";

export const sendComment = async (
        filmId: number,
        userId: number, userLogin: string, text: string,
        //setNewComment: ( newComment: IComment) => void
    ) => {
    try {
        const response = await axios.post<IComment>(`http://localhost:4998/film/${filmId}`, {
            userId,
            userLogin,
            text
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        //setNewComment( response.data )
        console.log('response Comment', response.data)

    } catch (e) {
        console.error
    }
}

export const sendSubcomment = async (
        filmId: number,
        parentCommentId: number,
        userId: number, userLogin: string, text: string,
        //setNewSubcomment: ( newComment: ISubcomment) => void
    ) => {
    try {
        const response = await axios.put<ISubcomment>(`http://localhost:4998/film/${filmId}`, {
            commentId: parentCommentId,
            userId,
            userLogin,
            text
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        //setNewSubcomment( response.data )
        console.log('response Comment', response.data)

    } catch (e) {
        console.error
    }
}