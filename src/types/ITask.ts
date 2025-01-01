import statuses from '../constants/statuses';

export type Status = (typeof statuses)[number];

interface ITask {
  id: number;
  name: string;
  status: Status;
  createdAt: string;
}

export default ITask;
