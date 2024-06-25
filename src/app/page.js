import Banner from "@/Components/Banner";
import Banner2 from "@/Components/Banner2";
// import Departments from "@/Components/Departments";
import OperationTheater from "@/Components/OperationTheater";
import Departments from "./(departments)/Departments";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <OperationTheater></OperationTheater>
      {/* <Departments></Departments> */}
      <Departments/>
    </div>
  );
}
