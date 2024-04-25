type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return <div className="text-white font-bold">{title}</div>;
}
