import { useState } from 'react';
import Modal from './Modal';
import { useTaskStore } from '@/store/TaskStore';

const DeleteTask = ({ id }: { id: number }) => {
  const { deleteTask } = useTaskStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onDelete = () => {
    deleteTask(id);
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="btn danger" onClick={onClick}>
        Удалить
      </button>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <h1 className="text-center text-3xl font-semibold mb-3">
            Удалить задачу
          </h1>
          <h3 className="text-xl">Вы действительно хотите удалить задачу?</h3>
          <div className="flex mt-5 justify-center gap-4">
            <button onClick={onDelete} className="btn primary">
              Удалить
            </button>
            <button onClick={onClose} className="btn danger">
              Отмена
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteTask;
