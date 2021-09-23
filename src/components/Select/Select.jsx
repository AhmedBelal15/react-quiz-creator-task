import styles from "./select.module.css";

const Select = ({ options, width, height, ...props }) => {
  return (
    <select
      style={{ width, height }}
      className={styles["select"]}
      {...props}
    >
        {options.map(option =>{
            return <option key={option.value} value={option.value}>{option.text}</option>
        })}
    </select>
  );
};

export default Select;
