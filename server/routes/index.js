import Articles from '../controllers/article';
import Comments from '../controllers/comment';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Article API!',
    }));

    app.post('/api/articles', Articles.createArticle); // API route for creating an article
    app.post('/api/articles/:articleId/comments', Comments.createComment); // API route for user to create a book
};