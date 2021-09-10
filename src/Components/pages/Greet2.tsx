type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet2(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : `Welcome guest!`}
      </h2>
    </div>
  );
}
