// simple plain 


// import Image from "next/image";
// import image from "../image/image.png";

// export default function Hero() {
//   return (
//     <div className="flex flex-col items-center">
//       <Image src={image} alt="image" width={256} height={256} />
//       <button style={{ backgroundColor: "#E1FDA7" , borderRadius: "5px", boxShadow: "2px 2px gray"}} className="text-black px-4 mt-4 mb-4 py-2  w-112 h-47 shadow-md">
//         New Note
//       </button>
//       <h3 className=" mt-4 font-poppins text-lg text-left">
//         <p className="mb-2">1. Click "New Note"</p>
//         <p className="mb-2 mt-5">2. Enter "Title" and description of note.</p>
//         <p className="mb-2 mt-5">3. Sticky Note To Do appears!</p>
//       </h3>
//     </div>
//   );
// }


// has a design below guide 


import Image from "next/image";
import image from "../image/image.png";

export default function Hero() {
    const aboutDesignStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0",
      };
    
      const sidebLineStyle = {
        height: "8px",
        margin: "0 10px",
        transform: "rotate(45deg)",
        width: "8px",
        backgroundColor: "#0E598C",
      };
    
      const middlebLineStyle = {
        borderRadius: "4px",
        height: "4px",
        position: "relative",
        width: "200px",
        background: "linear-gradient(45deg, #105A8C, #0E598C)",
      };
    
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt="image" width={256} height={256} />
      <button style={{ backgroundColor: "#E1FDA7", borderRadius: "5px", boxShadow: "2px 2px gray" }} className="text-black px-4 mt-4 mb-4 py-2  w-112 h-47">
  New Note
</button>
      <h1 className="text-2xl font-bold mb-4 mt-5 text-black text-center">Guide</h1>
      <div style={aboutDesignStyle}>
        <div style={sidebLineStyle}></div>
        <div style={middlebLineStyle}></div>
        <div style={sidebLineStyle}></div>
      </div>
      <h3 className="mt-4 font-poppins text-lg text-left">
        <p className="mb-2">1. Click "New Note"</p>
        <p className="mb-2 mt-5">2. Enter "Title" and description of note.</p>
        <p className="mb-2 mt-5">3. Sticky Note To Do appears!</p>
      </h3>
    </div>
  );
}

// box guide 

// export default function Hero() {
//   return (
//     <div className="flex flex-col items-center">
//       <Image src={image} alt="image" width={256} height={256} />
//       <button style={{ backgroundColor: "#E1FDA7" }} className="text-black px-4 mt-4 mb-4 py-2 border border-black w-112 h-47 shadow-md">
//         New Note
//       </button>
//       <div className="mt-8 border rounded-lg p-4 bg-gray-100">
//         <h2 className="font-bold text-xl mb-4">Guide</h2>
//         <ul className="list-disc ml-6">
//           <li>Click "New Note"</li>
//           <li className="mt-3">Enter "Title" and description of note.</li>
//           <li className="mt-3">Sticky Note To Do appears!</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
