import Articles from '../controllers/article';
import Comments from '../controllers/comment';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Article API!',
    }));
    app.delete('/api/comments/:commentId', Comments.deleteComment); // API route for deleting a comment
    app.put('/api/comments/:commentId', Comments.modifyComment); // API route for to edit comment
    app.get('/api/comments', Comments.listComments); // API route for user to get all comments in the database
    app.post('/api/articles', Articles.createArticle); // API route for creating an article
    app.post('/api/articles/:articleId/comments', Comments.createComment); // API route for creating an comment articles
    app.put('/api/articles/:articleId', Articles.modifyArticle); // API route for to edit Article
    app.delete('/api/articles/:articleId', Articles.deleteArticle); // API route for deleting an Article
    app.get('/api/articles', Articles.listArticles); // API route for user to get all Articles in the database




};