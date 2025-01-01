import { FormEventHandler } from 'react';

const FeedbackForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    event.currentTarget.reset();

    console.log('Form Data:', data);
  };

  return (
    <form
      className="flex flex-col w-1/2 mx-auto min-w-72"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-semibold mb-4">Обратная связь</h1>
      <label htmlFor="name">Иия</label>
      <input type="text" name="name" id="name" required maxLength={70} />
      <label className="mt-2" htmlFor="email">
        Почта
      </label>
      <input type="email" name="email" id="email" required />
      <label className="mt-2" htmlFor="message">
        Сообщение
      </label>
      <textarea rows={3} required maxLength={500} id="message" name="message" />
      <button className="btn primary w-full mt-4 mx-auto">Отправить</button>
    </form>
  );
};

export default FeedbackForm;
