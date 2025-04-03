import Button from './Button'

const MainInput = () => {
  return (
    <main>
      <div className="w-full flex flex-col items-center gap-6">
        <textarea
          placeholder="Paste your text here..."
          className="w-4/5 h-[35vh] border-2 border-gray-300 rounded-md bg-white text-lg resize-none shadow-lg transition-all duration-300 focus:border-gray-500 focus:shadow-gray-500 outline-none p-3"
        ></textarea>
        <Button />
      </div>
    </main>
  )
}

export default MainInput
