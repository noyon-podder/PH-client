import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  // const { register, handleSubmit } = useForm({
  //   ,
  // });

  const defaultValues = {
    id: "0003",
    password: "admin12345",
  };

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging In...");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));

      if (res.success) {
        toast.success("Login Successfully", { id: toastId, duration: 2000 });
        navigate(`/${user.role}/dashboard`);
      }
    } catch (err) {
      toast.error("Failed to log in.", { id: toastId, duration: 2000 });
      console.error(err);
    }
  };

  return (
    <Row justify="center" align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name={"id"} label="User Id" />

        <PHInput type="password" name={"password"} label="Password" />

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
