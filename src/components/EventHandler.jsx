const EventHandler = () => {
  const alertFunc = () => {
    alert("클릭됨");
  };
  return (
    <div>
      <span onClick={alertFunc}>클릭!</span>
      <br />
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자 계산
      </span>
    </div>
  );
};

export default EventHandler;
