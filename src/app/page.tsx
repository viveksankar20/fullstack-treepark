import Carocel from "@/components/carocel";
import MainSections from "@/components/mainSections";

export default function Home() {
  return (
    <main>
      <div
        className=" flex items-center justify-center  transition-all duration-700"
      >
        <Carocel/>
        
      </div>

      <MainSections/>
     
    </main>

  );
}

// export default function Home() {
//   const googleAuth = () => {
//     window.open('http://localhost:3000/auth/google')
//   }

//   const googleLogout = () => {
//     window.open('http://localhost:3000/logout')
//   }
//   return (
//     <div>
//       <button type="button" onClick={googleAuth}>google auth</button>
//       <button type="button" onClick={googleLogout}>logout</button>
//     </div>
//   )
// }

