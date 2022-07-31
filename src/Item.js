function Item(props) {
  console.log('item props', props);
  console.log(props.text);
  return (
    <h3>{props.text}</h3>
  );
}

export default Item;