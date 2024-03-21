import { useLocalStorage } from "../hooks/useLocalStorage";

export const CustomHook = () => {
  const [ids, setIds] = useLocalStorage<number[]>('ids', []);

  function addValue(value: number) {
    setIds([...ids, value]);
  }

  return (
    <div>
      <h2>Custom Hooks</h2>
      <div className="buttons">
        {[1, 2, 3, 4, 5].map(number => (
          <button
            key={number}
            onClick={() => addValue(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <p>{ids.join(', ')}</p>
    </div>
  );
};