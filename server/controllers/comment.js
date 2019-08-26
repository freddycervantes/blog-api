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
                message: `Your Article with the title ${title} has been created successfully `,
                comment
            }))
    }
}

export default Comments