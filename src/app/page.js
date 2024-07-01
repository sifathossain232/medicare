import Banner from "@/Components/Banner";
import Banner2 from "@/Components/Banner2";
import OperationTheater from "@/Components/OperationTheater";
import Departments from "./(departments)/Departments";
import Specialists from "@/Components/Specialists";
import AboutHospital from "@/Components/AboutHospital";
import Technology from "@/Components/Technology";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <OperationTheater></OperationTheater>
      <Departments></Departments>
      <Specialists></Specialists>
      <AboutHospital></AboutHospital>
      <Technology></Technology>
    </div>
  );
}
