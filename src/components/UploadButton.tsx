import { useTaskStore } from '@/store/TaskStore';
import validateTasks from '@/utils/validateTasks';
import { ChangeEventHandler } from 'react';

const UploadButton = () => {
  const { setTasks } = useTaskStore();

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = event => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        if (!e.target) return;
        try {
          const data = JSON.parse(e.target.result as string);
          if (validateTasks(data)) {
            setTasks(data);
          }
        } catch (error) {
          console.error('Ошибка при парсинге JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2 mt-3">Загрузить задачи</h1>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};

export default UploadButton;
