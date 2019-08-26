import model from '../models';

const { Article } = model;

class Articles {
    static createArticle(req, res) {
        const { title, author, type, content, status } = req.body;
        return Article
            .create({
                title,
                author,
                type,
                content,
                status
            })
            .then(articleData => res.status(201).send({
                success: true,
                message: 'Article successfully created',
                articleData
            }))
    }
}

export default Articles;