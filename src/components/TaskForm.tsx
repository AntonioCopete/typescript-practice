export default function TaskForm() {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadown-none border-0"
        />
      </form>
    </div>
  );
}
