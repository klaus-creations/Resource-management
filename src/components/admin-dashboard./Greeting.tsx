interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <span className="text-base font-bold tracking-[2px] text-gray-950">
        Hey, {name}!
      </span>
      <span className="text-sm font-bold tracking-[2px] text-gray-950">
        Deprtment Head, cse!
      </span>
      <span className="text-3xl font-medium text-gray-500 uppercase tracking-[1px]">
        Welcome Back.
      </span>
    </div>
  );
}
