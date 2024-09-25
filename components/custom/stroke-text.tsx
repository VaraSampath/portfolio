import styles from "./styles.module.css";

const StrokeText = ({ value, text }: { value: number|string; text: string }) => {
  return (
    <div className="relative py-16">
      <span className={styles.stroke}>{value}</span>
      <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-bg rounded-full px-2 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

export default StrokeText;
