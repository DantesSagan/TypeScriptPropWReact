export type ProfileProp = {
  name: string;
};

export default function Profile(prop: ProfileProp) {
  return (
    <div>
      Private Profile Component. <br /> Name is - {prop.name}{' '}
    </div>
  );
}
