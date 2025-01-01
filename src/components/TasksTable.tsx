import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { useTaskStore } from '@/store/TaskStore';
import statuses from '@/constants/statuses';
import { useState } from 'react';
import { Status } from '@/types/ITask';

const TasksTable = () => {
  const { tasks } = useTaskStore();
  const [status, setStatus] = useState<Status | ''>('');
  const filteredTasks = status
    ? tasks.filter(task => task.status === status)
    : tasks;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed min-w-[750px]">
        <caption className="text-left text-3xl font-bold mb-4">
          Ваши задачи:
        </caption>
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 align-top w-14">ID</th>
            <th className="text-wrap break-words align-top p-2 min-w-60">
              Название
            </th>
            <th className="p-2 align-top w-36">
              <p>Статус</p>
              <select
                value={status}
                onChange={e => setStatus(e.target.value as Status)}
              >
                <option value=""></option>
                {statuses.map(status => (
                  <option value={status} key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </th>
            <th className="p-2 align-top max-w-60">Дата создания</th>
            <th className="p-2 min-w-60"></th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(({ id, name, status, createdAt }) => (
            <tr key={id} className="border-b-2 border-b-gray-100">
              <td className="p-2">{id}</td>
              <td className="text-wrap break-words p-2 w-1/2">{name}</td>
              <td className="p-2">{status}</td>
              <td className="p-2">{createdAt}</td>
              <td className="flex flex-col lg:flex-row items-center gap-2 p-2">
                <EditTask id={id} name={name} status={status} />
                <DeleteTask id={id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
