interface ButtonProps {
  text?: string;
}

export default function Button({ text = '등록하기' }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-22.5 h-9.5 bg-brown-guide text-font-white rounded-lg font-medium transition-colors"
    >
      {text}
    </button>
  );
}