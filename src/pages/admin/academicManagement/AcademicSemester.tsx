import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const {data} = useGetAllSemestersQuery(undefined)
  return <div></div>;
};

export default AcademicSemester;
