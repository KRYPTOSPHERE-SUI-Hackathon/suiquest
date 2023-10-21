import styles from './Quest.module.css';

const Quest = ({ title, description, reward }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Reward: {reward}</p>
        </div>
    );
};

export default Quest;
