import { Status } from '@/types/ITask';
import { useState } from 'react';
import Modal from './Modal';
import TaskForm, { FormData } from './TaskForm';
import { useTaskStore } from '@/store/TaskStore';

const EditTask = ({
  id,
  name,
  status
}: {
  id: number;
  name: string;
  status: Status;
}) => {
  const { editTask } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = ({ name, status }: FormData) => {
    editTask(id, name, status);
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="btn primary" onClick={onClick}>
        Редактировать
      </button>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <h1 className="text-center text-3xl font-semibold mb-3">
            Редактировать задачу
          </h1>
          <TaskForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={{ name, status }}
          />
        </Modal>
      )}
    </>
  );
};

export default EditTask;
