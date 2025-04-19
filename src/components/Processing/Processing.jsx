// const Processing = () => {
//   return (
//     <div
//       className=" flex items-center gap-2 justify-center h-[100vh] w-[100vw]"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         height: "100vh",
//         paddingTop: "100px", // Adjust as needed
//         backgroundColor: "rgba(0, 0, 0, 0.4)", // Light blur effect
//         backdropFilter: "blur(2px)", // Blur effect
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         zIndex: 1000,
//       }}
//     >
//       <img
//         src="/loading-loader.gif"
//         alt="Loading..."
//         style={{ width: "200px" }} // Adjust the size as needed
//       />
//       <h1 className="text-xl font-semibold text-white">Processing ....</h1>
//     </div>
//   );
// };

// export default Processing;



const Processing = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm w-full">
        <div className="w-24 h-24 relative mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-t-red-500 border-r-red-300 border-b-red-200 border-l-red-400 animate-spin"></div>
          <div className="absolute inset-3 rounded-full border-4 border-t-yellow-500 border-r-yellow-300 border-b-yellow-200 border-l-yellow-400 animate-spin animation-delay-150"></div>
          <div className="absolute inset-6 rounded-full border-4 border-t-green-500 border-r-green-300 border-b-green-200 border-l-green-400 animate-spin animation-delay-300"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Processing</h1>
        <p className="text-gray-600 text-center">Your order is being processed. Please wait a moment...</p>

        <div className="mt-6 w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-red-500 h-1.5 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Processing
