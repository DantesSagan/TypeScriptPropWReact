type GreetProps = {
  name: string;
  // if you don' want to use this props below you can easily use synbol = ? = at the end of prop
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet2(props: GreetProps) {
  const {messageCount = 0 } = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : `Welcome guest!`}
      </h2>
    </div>
  );
}
