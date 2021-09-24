type ListProps<Type> = {
  // We can use items: string[] | number[]
  // But instead of typing this methods we can use Generig Props
  // That called and named whatever you want
  items: Type[];
  onClick: (value: Type) => void;
};
// Adding Type extends join all type of props what you wanted
// But if you want use just String or Number we can use this code:
// <Type extends string | number >
// Or all type props like below

export default function List<Type extends {}>({
  // Additionally we can use TypeProp by - id:
  // So <Type extends {id: number} by number or string
  // And we changing key value of map method
  items,
  onClick,
}: ListProps<Type>) {
  return (
    <div>
      <h2>List of items:</h2>
      {items.map((item, index) => {
        return (
          // Here we change index key to key={index.id}
          // And specified of GenericProp.tsx adding to object value id in number
          <div key={index} onClick={() => onClick(item)}>
            <div className='p-2 shadow-inner mr-72 ml-72 font-bold'> {item}</div>
          </div>
        );
      })}
    </div>
  );
}
