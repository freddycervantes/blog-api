import Articles from '../controllers/article';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the our Article API!',
    }));

    app.post('/api/articles', Articles.createArticle); // API route for creating an article
};