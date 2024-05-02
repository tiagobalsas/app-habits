const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function SummaryTable() {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((day, index) => {
          return (
            <div
              key={`${day}-${index}`}
              className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
