const Button = ({ text, onChange = () => {}, style = {} }) => {
  return (
    <button
      style={{
        width: "fit-content",
        height: "48px",
        borderRadius: "12px",
        fontSize: '18px',
        padding: '10px 20px',
        border: '1px solid 0f0f0f',
        cursor: 'pointer',
        ...style
      }}
      onClick={onChange}
    >
      {text}
    </button>
  );
};

export default Button;
