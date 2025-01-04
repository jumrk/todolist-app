const { renderTodo, postTodo, deleteTodo } = require("../app/controller/Todos");

function router(app) {
    app.get('/', renderTodo);
    app.post('/post', postTodo);
    app.delete('/delete/:id', deleteTodo);
}

module.exports = router;