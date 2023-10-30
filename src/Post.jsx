/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export function Post(props) {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
