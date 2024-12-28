import Task from "../model/todomodle.js";

export const addTask = async (req, res) => {
  try {
    const { title, status, priority } = req.body;
    const task = new Task({ title, status, priority });

    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.log("🚀 ~ addTask ~ error:", error);
    res.status(500).json({ message: "Task created failed", error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("🚀 ~ removeTask ~ error:", error);
    res
      .status(500)
      .json({ error: "Failed to delete task", details: error.message });
  }
};

export const fetchTask = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("🚀 ~ fetchTask ~ id:", id);

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ task });
  } catch (error) {
    console.log("🚀 ~ fetchTask ~ error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch tasks", details: error.message });
  }
};

export const fetchALLTask = async (req, res) => {
  try {
    const task = await Task.find({});
    if (!task) {
      return res.status(404).json({ error: "All Task not found" });
    }
    return res.status(200).json({ task });
  } catch (error) {
    console.log("🚀 ~ fetchALLTask ~ error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch tasks", details: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, status, priority } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, status, priority },
      { new: true, runValidators: true }
    );
    if (!updateTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.log("🚀 ~ updateTask ~ error:", error);
    res
      .status(500)
      .json({ error: "Failed to update task", details: error.message });
  }
};
