import model from '../models';

const { Comment } = model;

class Comments {
    static createComment(req, res) {
        const { author, approved, content} = req.body;
        const { articleId } = req.params;
        return Comment
            .create({
                author,
                approved,
                content,
                articleId
            })
            .then(comment => res.status(201).send({
                message: `Comment posted successfully `,
                comment
            }))
    }
    static listComments(req, res) {
        return Comment
            .findAll()
            .then(comments => res.status(200).send(comments));
    }

    static modifyComment(req, res) {
        const { author, approved, content } = req.body;
        return Comment
            .findByPk(req.params.commentId)
            .then((comment) => {
                comment.update({
                    author: author || comment.author,
                    approved: approved || comment.approved,
                    content: content || comment.content,
                })
                .then((updatedComment) => {
                    res.status(200).send({
                        message: 'Comment updated successfully',
                        data: {
                            author: author || updatedComment.author,
                            approved: approved || updatedComment.approved,
                            content: content || updatedComment.content,
                        }
                    })
                })
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }

    static deleteComment(req, res) {
        return Comment
            .findByPk(req.params.commentId)
            .then(comment => {
                if(!comment) {
                    return res.status(400).send({
                        message: 'Book Not Found',
                    });
                }
                return comment
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Book successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Comments