import styles from './MessageSection.module.scss';

export default function MessageSection({ messages }) {
  return (
    <ol>
      {messages?.map((message, index) => (
        <li key={index} className={styles['message-box']}>
          <span>{message.emoji}</span>
          <div>
            {message.content.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
