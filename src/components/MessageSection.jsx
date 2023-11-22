import styles from './MessageSection.module.scss';

export default function MessageSection({ messages, title }) {
  return (
    <section>
      <h3 className="title2">{title}</h3>
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
    </section>
  );
}
