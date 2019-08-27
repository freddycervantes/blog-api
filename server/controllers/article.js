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

    static modifyArticle(req, res) {
        const { title, author, type, content, status } = req.body;
        return Article
            .findByPk(req.params.articleId)
            .then((article) => {
                article.update({
                    title: title || article.title,
                    author: author || article.author,
                    approved: type || article.type,
                    content: content || article.content,
                    status: status || article.status
                })
                    .then((updatedArticle) => {
                        res.status(200).send({
                            message: 'Article updated successfully',
                            data: {
                                title: title || updatedArticle.title,
                                author: author || updatedArticle.author,
                                approved: type || updatedArticle.type,
                                content: content || updatedArticle.content,
                                status: status || updatedArticle.status
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static listArticles(req, res) {
        return Article
            .findAll()
            .then(articles => res.status(200).send(articles));
    }

    static deleteArticle(req, res) {
        return Article
            .findByPk(req.params.articleId)
            .then(article => {
                if(!article) {
                    return res.status(400).send({
                        message: 'Article Not Found',
                    });
                }
                return article
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Article successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Articles;