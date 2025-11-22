export default function StatusBar() {
  return (
    <div className="bg-blue-600 text-white px-4 py-1 text-sm flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span>main</span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>TypeScript</span>
      </div>
    </div>
  )
}