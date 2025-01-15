const Input = ({ type, value, onChange, placeholder = "", name = "" }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '30vw',
          height: '50px',
          borderRadius: '12px',
          fontSize: '24px',
          border: '1px solid #ccc',
          padding: '10px'
        }}
      />
    </div>
  );
};

export default Input;
