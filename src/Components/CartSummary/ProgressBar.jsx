export const ProgressBar = ({ totalPrice }) => {
  const percet = (totalPrice / 1000) * 100;
  const width = percet > 100 ? 100 : percet;
  return (
    <div className="rounded-lg bg-sky-100 p-3">
      <h1 className="pb-1 text-xs font-medium">
        Add &#x20B9;{1000 - totalPrice} more to get a FREE Wireless Mouse!
      </h1>
      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className={`h-3 rounded-full bg-blue-600`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};
