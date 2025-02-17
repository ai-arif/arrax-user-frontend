import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { LuLoader2 } from "react-icons/lu";

const EditProfile = ({ fullName }) => {
  const { fetchUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values: { fullName },
  });

  const onSubmit = async (userData) => {
    try {
      const formData = new FormData();
      formData.append("fullName", userData.fullName);
      if (userData.image[0]) {
        formData.append("image", userData.image[0]);
      }

      const response = await axiosInstance.post(
        "/users/update-profile",
        formData,
      );
      if (response?.data?.success) {
        toast.success(response.data.message);
        await fetchUser();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="rounded-sm bg-arx-secondary px-2 py-1 transition-colors">
            <FiEdit className="text-base md:text-lg" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[85%] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit your profile</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="full-name" className="sr-only">
                Full Name
              </Label>
              <Input
                {...register("fullName", { required: "Full name is required" })}
                id="full-name"
                type="text"
                placeholder="Enter Full Name"
              />
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor="image" className="sr-only">
                Image
              </Label>
              <Input
                {...register("image")}
                id="image"
                type="file"
                placeholder="Upload Image"
                accept="image/*"
              />
              <ErrorMessage>{errors.image?.message}</ErrorMessage>
            </div>
            <DialogFooter>
              <Button disabled={isSubmitting} type="submit" className="">
                {isSubmitting ? (
                  <>
                    <LuLoader2 className="mr-1 inline animate-spin-fast text-lg" />
                    <span className="text-base">Please Wait</span>
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfile;
