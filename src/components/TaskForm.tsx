import { FormEventHandler, useState } from 'react';

import statuses from '@/constants/statuses';
import { Status } from '@/types/ITask';

export interface FormData {
  name: string;
  status: Status;
}

interface TaskFormProps {
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
  initialData?: FormData;
}

const TaskForm = ({
  initialData = { name: '', status: statuses[0] },
  onSubmit,
  onCancel
}: TaskFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const handleChange = <T extends keyof FormData>(
    key: T,
    value: FormData[T]
  ) => {
    setFormData(formData => ({ ...formData, [key]: value }));
  };

  const handleSumbit: FormEventHandler = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col md:min-w-[400px]" onSubmit={handleSumbit}>
      <label htmlFor="name">Название задачи</label>
      <input
        type="text"
        id="name"
        required
        maxLength={100}
        value={formData.name}
        onChange={e => handleChange('name', e.target.value)}
      />
      <label htmlFor="name" className="mt-2">
        Статус задачи
      </label>
      <select
        id="status"
        value={formData.status}
        onChange={e => handleChange('status', e.target.value as Status)}
      >
        {statuses.map(status => (
          <option value={status} key={status}>
            {status}
          </option>
        ))}
      </select>
      <div className="flex mt-4 justify-center gap-4">
        <button className="btn primary min-w-32" type="submit">
          ОК
        </button>
        <button
          className="btn danger min-w-32"
          type="button"
          onClick={onCancel}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
