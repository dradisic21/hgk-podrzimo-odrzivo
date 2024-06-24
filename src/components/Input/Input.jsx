import "./Input.scss";

export function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        className={props.className}
      />
    </>
  );
}
