import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicFaculty = () => {
  const [addFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const academicFacultyData = {
      name: data.name,
    };
    const toastId = toast.loading("Creating....");
    try {
      const res = await addFaculty(academicFacultyData);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Faculty Created Successfully", { id: toastId });
      }
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Create Faculty</h2>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="name" label="Enter Faculty Name" />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </div>
  );
};

export default CreateAcademicFaculty;
