import CreateTask from '@/components/CreateTask';
import DownloadButton from '@/components/DownloadButton';
import TasksTable from '@/components/TasksTable';
import UploadButton from '@/components/UploadButton';

const TasksPage = () => {
  return (
    <>
      <CreateTask />
      <div className="my-4">
        <DownloadButton />
        <UploadButton />
      </div>
      <TasksTable />
    </>
  );
};

export default TasksPage;
