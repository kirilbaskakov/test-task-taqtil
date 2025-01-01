import { useTaskStore } from '@/store/TaskStore';

const DownloadButton = () => {
  const { tasks } = useTaskStore();

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} className="btn primary">
      Скачать данные
    </button>
  );
};

export default DownloadButton;
