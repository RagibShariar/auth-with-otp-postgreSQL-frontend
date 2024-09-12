import { Button } from "@/components/ui/button";
import { setUser, TUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const GoogleSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const api = axios.create({
    // baseURL: "https://sports-facilit-booking-platform.vercel.app/api",
    // baseURL: "http://localhost:5000/api",
    baseURL: "https://authpostgresql.labontest.tech/api",
  });
  const googleAuth = (code: string) => api.get(`/auth/google?code=${code}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseGoogle = async (authResult: any) => {
    try {
      // console.log(authResult);
      if (authResult["code"]) {
        // send code to server
        const result = await googleAuth(authResult["code"]);
        // console.log(result);

        const DecodedUser = jwtDecode(result.data.token) as TUser;
        // console.log(DecodedUser);

        dispatch(setUser({ user: DecodedUser, token: result.data.token }));
        toast.success("Login Successful");
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong while login");
      // console.log(error);
    }
  };

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <>
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full mt-4"
      >
        <FcGoogle size={20} className="mr-2" />
        Login with Google
      </Button>
    </>
  );
};

export default GoogleSignIn;
