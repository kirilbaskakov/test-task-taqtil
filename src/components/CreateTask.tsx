import { useState } from 'react';
import Modal from './Modal';
import TaskForm, { FormData } from './TaskForm';
import { useTaskStore } from '@/store/TaskStore';

const CreateTask = () => {
  const { createTask } = useTaskStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = ({ name, status }: FormData) => {
    createTask(name, status);
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="btn primary text-xl mb-3" onClick={onClick}>
        Создать задачу
      </button>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <h1 className="text-center text-3xl font-semibold mb-3">
            Создание задачи
          </h1>
          <TaskForm onSubmit={onSubmit} onCancel={onClose} />
        </Modal>
      )}
    </>
  );
};

export default CreateTask;
