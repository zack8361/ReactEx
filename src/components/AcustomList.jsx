export default function AcustomList(props) {
  return (
    <ul>
      {props.arr?.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
}
