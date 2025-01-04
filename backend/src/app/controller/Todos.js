const Todos = require("../model/Todos");

class TodolisController {
    async renderTodo(req, res) {
        const todos = await Todos.find();
        res.json(todos);
    }
    async postTodo(req, res) {
        try {
            const name = req.body;
            const newTodo = new Todos(name);
            newTodo.save();
            res.status(201).json({ message: "Công việc đã thêm thành công", todo: newTodo });
        } catch (error) {
            res.status(500).json({ error: 'Có lỗi vui lòng thử lại' })
        }
    }
    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const result = await Todos.findByIdAndDelete(id);
            if (!result) {
                return res.status(404).json({ message: "Không tìm thấy công ciệc" });
            }
            res.status(200).json({ message: "Công việc xóa thành công" });
        } catch (error) {
            res.status(500).json({ message: "Lỗi server" });
        }
    }
}
module.exports = new TodolisController();